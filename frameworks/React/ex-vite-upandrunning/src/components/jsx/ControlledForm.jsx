// ========================================================
// example in 'React: Up & Running'
// ========================================================

import { useState } from "react"
import * as Lib from '../../lib/lib.js'

// Example of controlled component: `value`, `checked`
export function ControlledForm({ profile }) {
  const [state, setState] = useState(profile)

  function updateForm(event) {
    const target = event.target
    const newProfile = Lib.clone(state)
    newProfile[target.name] = target.type === 'checkbox' ? target.checked : target.value
    console.log(`updateForm::${JSON.stringify(newProfile)}`)
    setState(newProfile)
  }

  return (
    <form>
      <label>
        First name:{' '}
        <input type="text" name="firstname" value={state.firstname} onChange={updateForm} />
      </label>
      <br />
      <label>
        Last name:{' '}
        <input type="text" name="lastname" value={state.lastname} onChange={updateForm} />
      </label>
      <br />
      Gender:
      <label>
        <input
          type="radio"
          name="gender"
          checked={state.gender === 'male'}
          onChange={updateForm}
          value="male"
        />
        Male
      </label>
      <label>
        <input
          type="radio" name="gender"
          checked={state.gender === 'female'}
          onChange={updateForm}
          value="female"
        />
        Female
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="acceptedTOC"
          checked={state.acceptedTOC === true}
          onChange={updateForm}
        />
        I accept terms and things
      </label>
      <br />
      <input type="submit" value="Save" />
    </form>
  )
}