// ========================================================
// example in 'React: Up & Running'
// ========================================================

import { useState, useEffect, useReducer } from "react"
import * as Lib from '../lib/lib.js'

import './Excel.css'

// replay
let dataLog = [];
let auxLog = [];
let isReplaying = false;
let replayID = null;

// ========================================================
// replay
// ========================================================
function replay() {
  isReplaying = true;
  let idx = 0;
  replayID = setInterval(() => {
    const [data, fn] = dataLog[idx];
    fn(data);
    auxLog[idx] &&
      auxLog[idx].forEach((log) => {
        const [data, fn] = log;
        fn(data);
      });
    idx++;
    if (idx > dataLog.length - 1) {
      isReplaying = false;
      clearInterval(replayID);
      return;
    }
  }, 1000);
}

// a custom hook
function useLoggedState(initialValue, isData) {
  console.debug(`log state: ${initialValue}`)
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    if (isReplaying) {
      return;
    }
    if (isData) {
      dataLog.push([Lib.clone(state), setState]);
    } else {
      const idx = dataLog.length - 1;
      if (!auxLog[idx]) {
        auxLog[idx] = [];
      }
      auxLog[idx].push([state, setState]);
    }
  },
    [state]);

  return [state, setState];
}

/**
 * Excel: function component
 * @param {object} headers table header
 * @param {object} initialData table data
 */
export function ExcelF({ headers, initialData }) {
  // hooks
  // data
  const [data, setData] = useLoggedState(initialData, true)
  // sort
  const [sorting, setSorting] = useLoggedState({
    column: null,
    descending: false,
  })
  // edit
  const [edit, setEdit] = useLoggedState(null)
  // search
  const [search, setSearch] = useLoggedState(false)
  const [preSearchData, setPreSearchData] = useLoggedState(null)
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
    const column = event.target.cellIndex;
    const descending = sorting.column === column && !sorting.descending;
    const dataCopy = Lib.clone(data);
    dataCopy.sort((a, b) => {
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
    setData(dataCopy);
    setSorting({ column, descending });
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
    const dataCopy = Lib.clone(data).map((row) => {
      if (row[row.length - 1] === edit.row) {
        row[edit.column] = input.value;
      }
      return row;
    })
    dataCopy[edit.row][edit.column] = input.value
    setEdit(null)
    setData(dataCopy)

    const preSearch = Lib.clone(preSearchData);
    preSearch[edit.row][edit.column] = input.value;
    setPreSearchData(preSearch);
  }

  // ========================================================
  // search
  // ========================================================
  function toggleSearch() {
    if (search) {
      setData(preSearchData);
      setSearch(false);
      setPreSearchData(null);
    } else {
      setPreSearchData(data);
      setSearch(true);
    }
  }

  function filter(e) {
    const needle = e.target.value.toLowerCase();
    if (!needle) {
      setData(preSearchData);
      return;
    }
    const idx = e.target.dataset.idx;
    const searchdata = preSearchData.filter((row) => {
      return row[idx].toString().toLowerCase().indexOf(needle) > -1;
    });
    setData(searchdata);
  }

  // ========================================================
  // replay
  // ========================================================
  // `useEffect(callback, dependencies)`
  // 1. dependencies NOT changed: no need to invoke callback
  // 2. dependencies is empty: callback invoked once, similar to `componentDidMount()`
  // 3. dependencies is ommitted, callback invoked on every rerender
  // 4. `componentWillUnmount()`: use the return value of callback
  useEffect(() => {
    // called once after initial renderer
    console.log(ExcelF.name + '::componentDidMount')
    function keydownHandler(e) {
      if (e.altKey && e.shiftKey && e.keyCode === 82) {
        replay();
      }
    }
    document.addEventListener('keydown', keydownHandler);

    return () => {
      // called when component will be removed from DOM
      console.log(ExcelF.name + '::componentWillUnmount')
      document.removeEventListener('keydown', keydownHandler);
      clearInterval(replayID);
      dataLog = [];
      auxLog = [];
    };
  },
    // empty dependencies
    []);

  useEffect(() => {
    // called on every rerender
    console.log(ExcelF.name + `::componentDidUpdate:\n===data=${JSON.stringify(data)}`)
  }, /** ommitted */)

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