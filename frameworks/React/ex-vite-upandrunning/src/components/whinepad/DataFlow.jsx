import { useState, useReducer, useRef } from 'react';

import { Header } from './Header.jsx';
import { Body } from './Body.jsx';
// import { Dialog } from './Dialog.jsx';
import { Excel } from './Excel.jsx';
// import { Form } from './Form.jsx';
import * as Lib from '../../lib/lib.js';

import { schema } from './data.js'
import { DataContext } from './context/DataContext.js'
import { RouteContext } from './context/RouteContext.js'

let initialData = JSON.parse(localStorage.getItem('data'))
if (!initialData) {
  initialData = [{}]
  Object.keys(schema).forEach((key) => (initialData[0][key] = schema[key].samples[0]))
}

function commitToStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}

// function reducer(data, action) {
//   if (action.type === 'save') {
//     data = clone(data);
//     data.unshift(action.payload.formData);
//     commitToStorage(data);
//     return data;
//   }
//   if (action.type === 'excelchange') {
//     commitToStorage(action.payload.updatedData);
//     return action.payload.updatedData;
//   }
// }

// route
//
const route = {}
function resetRoute() {
  route.add = false
  route.edit = null
  route.info = null
  route.filter = null
}
resetRoute()
const path = window.location.pathname.replace(/\//, '')
if (path) {
  const [action, id] = path.split('/')
  if (action === 'add') {
    route.add = true
  } else if (action === 'edit' && id !== undefined) {
    route.edit = parseInt(id, 10)
  } else if (action === 'info' && id !== undefined) {
    route.info = parseInt(id, 10)
  } else if (action === 'filter' && id !== undefined) {
    route.filter = id
  }
}

// * @param {*} schema headers
// * @param {*} initialData data
/**
 * @returns DataFlow component
 */
export function DataFlow() {
  // reducer
  // const [data, dispatch] = useReducer(reducer, initialData);
  const [data, setData] = useState(initialData)
  //state
  const [addNew, setAddNew] = useState(false);
  const [filter, setFilter] = useState(route.filter);

  // ref
  // const form = useRef(null);

  function updateData(newData) {
    newData = Lib.clone(newData)
    commitToStorage(newData)
    setData(newData)
  }

  // function saveNew(action) {
  //   setAddNew(false);
  //   if (action === 'dismiss') {
  //     return;
  //   }

  //   const formData = {};
  //   Array.from(form.current).forEach(
  //     (input) => (formData[input.id] = input.value),
  //   );

  //   dispatch({
  //     type: 'save',
  //     payload: { formData },
  //   });
  // }

  // function onExcelDataChange(updatedData) {
  //   dispatch({
  //     type: 'excelchange',
  //     payload: { updatedData },
  //   });
  // }

  function onSearch(e) {
    const s = e.target.value
    setFilter(s)
    if (s) {
      updateRoute('filter', s)
    } else {
      updateRoute()
    }
  }

  // route
  function updateRoute(action = '', id = '') {
    resetRoute()
    if (action) {
      route[action] = action === 'add' ? true : id
    }
    id = id !== '' ? '/' + id : ''
    // History API
    window.history.replaceState(null, null, `/${action}${id}`)
  }

  return (
    <div className="DataFlow">
      {/**
         * provide context: data, updateData 
         * shared among <Header>, <Excel>
         */}
      <DataContext.Provider value={{ data, updateData }}>
        <RouteContext.Provider value={{ route, updateRoute }}>
          {/* header */}
          <Header
            // onAdd={() => setAddNew(true)}
            onSearch={onSearch} // pass callbacks
          // count={data.length} // pass props
          />
          {/* body */}
          <Body>
            <Excel
              // schema={schema}
              // initialData={data}
              // key={data}
              // onDataChange={(updatedData) => onExcelDataChange(updatedData)}
              filter={filter}
            />
            {/* add dialog */}
            {/* {addNew ? (
            <Dialog
              modal={true}
              header="Add new item"
              confirmLabel="Add"
              onAction={(action) => saveNew(action)}>
              <Form ref={form} fields={schema} />
            </Dialog>
          ) : null} */}
          </Body>
        </RouteContext.Provider>
      </DataContext.Provider>
    </div>
  );
}