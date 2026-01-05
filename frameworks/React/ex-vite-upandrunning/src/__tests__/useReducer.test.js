import { useReducer } from "react"
import * as Lib from '../lib/lib.js'
import { describe, expect } from "@jest/globals"

const ACTION_NEWDATA = 'newdata'
const ACTION_RECOLOR = 'recolor'

const initialState = { data: [], color: 'black', background: 'white' }

function myReducer(oldState, action) {
  const newState = Lib.clone(oldState)
  if (action.type === ACTION_RECOLOR) {
    newState[action.payload.what] = `rgb(${Lib.rand(256)},${Lib.rand(256)},${Lib.rand(256)})`
  } else if (action.type === ACTION_NEWDATA) {
    const data = []
    for (let i = 0; i < 10; i++) {
      data[i] = []
      for (let j = 0; j < 10; j++) {
        data[i][j] = Lib.rand(100)
      }
    }
    newState.data = data
  }
  return newState
}

// ========================================================
// example in 'React: Up & Running'
// ========================================================
function RandomData() {
  const [state, dispatch] = useReducer(myReducer, initialState)
  return (
    <div>
      <div className="toolbar">
        <button onClick={() => dispatch({ type: ACTION_NEWDATA })}>
          Get data
        </button>{' '}
        <button
          onClick={() => dispatch({ type: ACTION_RECOLOR, payload: { what: 'color' } })}>
          Recolor text
        </button>{' '}
        <button
          onClick={
            () => dispatch({ type: ACTION_RECOLOR, payload: { what: 'background' } })
          }>
          Recolor background
        </button>
      </div>
      <table style={{ color, background }}>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, idx) => (
                <td key={idx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

describe('useReducer - RandomData', () => {
  it('produce array', () => {
    const { data } = myReducer(initialState, { type: ACTION_NEWDATA })
    expect(data.length).toEqual(10)
    expect(data[0].length).toEqual(10)
  })
})