import { useState, useReducer, useRef, useContext, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { clone } from '../../lib/lib.js';

import './Excel.css';
import { Actions } from './Actions.jsx';
import { Dialog } from './Dialog.jsx';
import { Form } from './Form.jsx';
import { Rating } from './Rating.jsx';

import { schema } from './data.js'; //
import { DataContext } from './context/DataContext.js'; //
import { RouteContext } from './context/RouteContext.js';

// function reducer(data, action) {
//   if (action.type === 'sort') {
//     const { column, descending } = action.payload;
//     return data.sort((a, b) => {
//       if (a[column] === b[column]) {
//         return 0;
//       }
//       return descending
//         ? a[column] < b[column]
//           ? 1
//           : -1
//         : a[column] > b[column]
//           ? 1
//           : -1;
//     });
//   }
//   if (action.type === 'save') {
//     const { int, edit } = action.payload;
//     data[edit.row][edit.column] = int
//       ? parseInt(action.payload.value, 10)
//       : action.payload.value;
//   }
//   if (action.type === 'delete') {
//     data = clone(data);
//     data.splice(action.payload.rowidx, 1);
//   }

//   if (action.type === 'saveForm') {
//     Array.from(action.payload.form.current).forEach(
//       (input) => (data[action.payload.rowidx][input.id] = input.value),
//     );
//   }

//   // why happened twice: <StrictMode>
//   // [#16295 - useReducer dispatch calls reduce twice](https://github.com/facebook/react/issues/16295)
//   console.log(`data=${JSON.stringify(data)}, action=${JSON.stringify(action)}`)
//   setTimeout(() => action.payload.onDataChange(data));
//   return data;
// }

function dataMangler(data, action, payload) {
  if (action === 'sort') {
    const { column, descending } = payload;
    return data.sort((a, b) => {
      if (a[column] === b[column]) {
        return 0;
      }
      return descending
        ? a[column] < b[column]
          ? 1
          : -1
        : a[column] > b[column]
          ? 1
          : -1;
    });
  }
  if (action === 'save') {
    const { int, edit } = payload;
    data[edit.row][edit.column] = int
      ? parseInt(payload.value, 10)
      : payload.value;
  }
  if (action === 'delete') {
    data = clone(data);
    data.splice(payload.rowidx, 1);
  }

  if (action === 'saveForm') {
    Array.from(payload.form.current).forEach(
      (input) => (data[payload.rowidx][input.id] = input.value),
    );
  }
  return data;
}

//  * @param {*} schema headers
//  * @param {*} initialData data
//  * @param {*} onDataChange data change handler
/**
 * @param {*} filter filter content
 * @returns Excel component
 */
export function Excel({
  //  schema, 
  //  initialData, 
  //  onDataChange,
  filter }) {
  // reducer
  // const [data, dispatch] = useReducer(reducer, initialData)
  // context
  const { data, updateData } = useContext(DataContext)
  const { route, updateRoute } = useContext(RouteContext)
  // state
  const [sorting, setSorting] = useState({
    column: '',
    descending: false,
  })
  const [edit, setEdit] = useState(null)
  const [dialog, setDialog] = useState(null)
  // ref
  const form = useRef(null);

  function sort(e) {
    const column = e.target.dataset.id;
    if (!column) {
      return;
    }
    const descending = sorting.column === column && !sorting.descending;
    setSorting({ column, descending });
    // dispatch({ type: 'sort', payload: { column, descending } });
    const newData = dataMangler(data, 'sort', { column, descending })
    updateData(newData)
  }

  function showEditor(e) {
    const config = e.target.dataset.schema;
    if (!config || config === 'rating') {
      return;
    }
    setEdit({
      row: parseInt(e.target.parentNode.dataset.row, 10),
      column: config,
    });
  }

  function save(e) {
    e.preventDefault();
    const value = e.target.firstChild.value;
    const valueType = schema[e.target.parentNode.dataset.schema].type;
    // dispatch({
    //   type: 'save',
    //   payload: {
    //     edit,
    //     value,
    //     onDataChange,
    //     int: valueType === 'year' || valueType === 'rating',
    //   },
    // });
    updateData(dataMangler(data, 'save', {
      edit,
      value,
      int: valueType === 'year' || valueType === 'rating',
    }))
    setEdit(null);
  }

  // /**
  //  * 
  //  * @param {*} rowidx row no
  //  * @param {*} type action type: delete, edit, info
  //  */
  // function handleAction(rowidx, type) {
  const handleAction = useCallback(
    (rowidx, type) => {
      if (type === 'delete') {
        setDialog(
          <Dialog
            modal
            header="Confirm deletion"
            confirmLabel="Delete"
            onAction={(action) => {
              setDialog(null);
              updateRoute()
              if (action === 'confirm') {
                // dispatch({
                //   type: 'delete',
                //   payload: {
                //     rowidx,
                //     onDataChange,
                //   },
                // });
                updateData(dataMangler(data, 'delete', { rowidx }))
              }
            }}>
            {`Are you sure you want to delete "${data[rowidx].name}"?`}
          </Dialog>,
        );
      }
      const isEdit = type === 'edit';
      if (type === 'info' || isEdit) {
        const formPrefill = data[rowidx];
        updateRoute(type, rowidx)
        setDialog(
          <Dialog
            modal
            extendedDismiss={!isEdit}
            header={isEdit ? 'Edit item' : 'Item details'}
            confirmLabel={isEdit ? 'Save' : 'ok'}
            hasCancel={isEdit}
            onAction={(action) => {
              setDialog(null);
              updateRoute()
              if (isEdit && action === 'confirm') {
                // dispatch({
                //   type: 'saveForm',
                //   payload: {
                //     rowidx,
                //     onDataChange,
                //     form,
                //   },
                // });
                updateData(dataMangler(data, 'saveForm', { rowidx, form }))
              }
            }}>
            <Form
              ref={form}
              fields={schema}
              initialData={formPrefill}
              readonly={!isEdit}
            />
          </Dialog>,
        );
      }
    }
    , [data, updateData, updateRoute])

  useEffect(() => { // route
    if (route.edit !== null && route.edit < data.length) {
      handleAction(route.edit, 'edit')
    } else if (route.info !== null && route.info < data.length) {
      handleAction(route.info, 'info')
    }
  }, [route, handleAction, data])

  return (
    // className for one CSS file per component
    <div className="Excel">
      <table>
        <thead onClick={sort}>
          <tr>
            {Object.keys(schema).map((key) => {
              let { label, show } = schema[key];
              if (!show) {
                return null;
              }
              if (sorting.column === key) {
                label += sorting.descending ? ' \u2193' : ' \u2191';
              }
              return (
                <th key={key} data-id={key}>
                  {label}
                </th>
              );
            })}
            <th className="ExcelNotSortable">Actions</th>
          </tr>
        </thead>
        <tbody onDoubleClick={showEditor}>
          {data.map((row, rowidx) => {
            if (filter) {
              const needle = filter.toLowerCase();
              let match = false;
              const fields = Object.keys(schema);
              for (let f = 0; f < fields.length; f++) {
                if (row[fields[f]].toString().toLowerCase().includes(needle)) {
                  match = true;
                }
              }
              if (!match) {
                return null;
              }
            }

            return (
              <tr key={rowidx} data-row={rowidx}>
                {Object.keys(row).map((cell, columnidx) => {
                  const config = schema[cell];
                  if (!config.show) {
                    return null;
                  }
                  let content = row[cell];
                  if (edit && edit.row === rowidx && edit.column === cell) {
                    content = (
                      <form onSubmit={save}>
                        <input type="text" defaultValue={content} />
                      </form>
                    );
                  } else if (config.type === 'rating') {
                    content = (
                      <Rating
                        id={cell}
                        readonly
                        key={content}
                        defaultValue={Number(content)}
                      />
                    );
                  }

                  return (
                    <td
                      key={columnidx}
                      data-schema={cell}
                      className={classNames({
                        [`schema-${cell}`]: true,
                        ExcelEditable: config.type !== 'rating',
                        ExcelDataLeft: config.align === 'left',
                        ExcelDataRight: config.align === 'right',
                        ExcelDataCenter:
                          config.align !== 'left' && config.align !== 'right',
                      })}>
                      {content}
                    </td>
                  );
                })}
                <td>
                  <Actions onAction={handleAction.bind(null, rowidx)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {dialog}
    </div>
  );
}