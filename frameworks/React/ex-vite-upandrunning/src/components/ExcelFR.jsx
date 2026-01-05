// ========================================================
// example in 'React: Up & Running'
// ========================================================

import { useState, useReducer } from "react"
import * as Lib from '../lib/lib.js'

const ACTION_SORT = 'sort'
const ACTION_SAVE = 'save'
const ACTION_START_SEARCHING = 'startSearching'
const ACTION_DONE_SEARCHING = 'doneSearching'
const ACTION_SEARCH = 'search'

// ========================================================
// reducer: handle all state changes in a sginle location
// @see `useReducer()`, `dispatch()`
// ========================================================
let originalData = null
function reducer(
  data,  // oldState
  action // event object: {type, payload}
) {
  console.log(`redurcer::data=${data}, action=${JSON.stringify(action)}`)
  if (action.type === ACTION_SORT) {
    const { column, descending } = action.payload;
    return clone(data).sort((a, b) => {
      if (a[column] === b[column]) {
        return 0
      }
      return descending
        ? a[column] < b[column]
          ? 1
          : -1
        : a[column] > b[column]
          ? 1
          : -1
    })
  }
  if (action.type === ACTION_SAVE) {
    data[action.payload.edit.row][action.payload.edit.column] =
      action.payload.value
    return data
  }
  if (action.type === ACTION_START_SEARCHING) {
    originalData = data
    return originalData
  }
  if (action.type === ACTION_DONE_SEARCHING) {
    return originalData
  }
  if (action.type === ACTION_SEARCH) {
    return originalData.filter((row) => {
      return (
        row[action.payload.column]
          .toString()
          .toLowerCase()
          .indexOf(action.payload.needle.toLowerCase()) > -1
      )
    })
  }
}

/**
 * Excel: function component using `useReducer`
 * @param {object} headers table header
 * @param {object} initialData table data
 */
export function ExcelFR({ headers, initialData }) {
  // hooks
  // data
  const [data, dispatch] = useReducer(reducer, initialData)
  // sort
  const [sorting, setSorting] = useState({
    column: null,
    descending: false,
  })
  // edit
  const [edit, setEdit] = useState(null)
  // search
  const [search, setSearch] = useState(false)
  const [preSearchData, setPreSearchData] = useState(null)
  const searchRow = !search ? null : (
    <tr onChange={filter}>
      {headers.map((_, idx) => (
        <td key={idx}>
          <input type="text" data-idx={idx} />
        </td>
      ))}
    </tr>
  );

  // ========================================================
  // sort
  // ========================================================
  function sort(event) {
    const column = event.target.cellIndex
    const descending = sorting.column === column && !sorting.descending
    setSorting({ column, descending })
    dispatch({ type: ACTION_SORT, payload: { column, descending } })
  }

  // ========================================================
  // edit data
  // ========================================================
  function showEditor(event) {
    setEdit({
      row: parseInt(event.target.parentNode.dataset.rown, 10),
      column: event.target.cellIndex
    })
  }

  function save(event) {
    event.preventDefault()
    const input = event.target.firstChild
    dispatch({
      type: ACTION_SAVE,
      payload: {
        edit,
        value,
      }
    })
    setEdit(null)

    const preSearch = Lib.clone(preSearchData);
    preSearch[edit.row][edit.column] = input.value;
    setPreSearchData(preSearch);
  }

  // ========================================================
  // search
  // ========================================================
  function toggleSearch() {
    if (!search) {
      dispatch({ type: ACTION_START_SEARCHING })
    } else {
      dispatch({ type: ACTION_DONE_SEARCHING })
    }
    setSearch(!search)
  }

  function filter(e) {
    const needle = e.target.value
    const column = e.target.dataset.idx;
    dispatch({
      type: ACTION_SEARCH,
      payload: { needle, column }
    })
    setEdit(null)
  }

  // ========================================================
  // render
  // ========================================================
  return (
    <div>
      <div className="toolbar">
        <button onClick={toggleSearch}>
          {search ? 'Hide search' : 'Show search'}
        </button>
      </div>
      <table>
        <thead onClick={sort}>
          <tr>{headers.map((title, idx) => {
            if (sorting.column === idx) {
              title += sorting.descending ? ' v' : ' ^'
            }
            return <th key={idx}>{title}</th>
          }
          )}</tr>
        </thead>
        <tbody onDoubleClick={showEditor}>
          {searchRow}
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} data-rown={rowIdx}>
              {row.map((cell, columnIdx) => {
                if (edit && edit.row === rowIdx && edit.column === columnIdx) {
                  cell = (
                    <form onSubmit={save}>
                      <input type="text" defaultValue={cell} />
                    </form>
                  )
                }
                return <td key={columnIdx}>{cell}</td>
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}