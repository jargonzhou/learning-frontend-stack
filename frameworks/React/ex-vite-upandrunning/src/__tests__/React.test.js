/**
 * @jest-environment jsdom
 */
import { describe, expect, it } from "@jest/globals"

import { act } from 'react';
import ReactDOM from 'react-dom/client'
import { Counter } from '../components/Counter.jsx'
import { Star } from '../components/Icons.jsx'
import { Checkbox } from '../components/Checkbox.jsx'

import { toHaveAttribute, toHaveTextContent } from '@testing-library/jest-dom'
import { render, fireEvent } from "@testing-library/react";

// ========================================================
// Jest DOM, React `act`
// ========================================================

describe('Counter - Jest', () => {
  it('render', async () => {
    const rootNode = document.createElement('div')
    document.body.appendChild(rootNode)

    // act is a test helper to apply pending React updates before making assertions.
    // https://react.dev/reference/react/act
    await act(() => {
      const root = ReactDOM.createRoot(rootNode)
      root.render(<Counter />)
    })
    expect(rootNode.querySelector('h3')).toBeTruthy()
  })
})

// ========================================================
// React Testing Library
// ========================================================
describe('Counter - React Testing Library', () => {
  it('render', async () => {
    const rootNode = document.createElement('div')
    document.body.appendChild(rootNode)

    await act(() => {
      const root = ReactDOM.createRoot(rootNode)
      root.render(<Counter />)
    })
    expect(rootNode.querySelector('h3')).toHaveAttribute('id', 'counter')
  })

  it('query', () => {
    const { getByText } = render(<Star />)
    const h3 = getByText(/Great Star/)
    expect(h3).toHaveTextContent('Great Star')
  })

  it('event', () => {
    const { getByLabelText } = render(<Checkbox />)
    const checkbox = getByLabelText(/not checked/)

    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)

    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(false)
  })

  it('getByTestId', () => {
    const { getByTestId } = render(<Checkbox />)
    const checkbox = getByTestId('checkbox') // data-testid

    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
  })
})