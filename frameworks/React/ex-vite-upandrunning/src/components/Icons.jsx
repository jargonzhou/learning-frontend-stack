// ========================================================
// example in 'Learning React'
// ========================================================

import { FaStar } from 'react-icons/fa'

export function Star({ selected = false }) {
  return (
    <>
      <h1>Great Star</h1>
      <FaStar color={selected ? 'red' : 'grey'} id="star" />
    </>
  )
}