// ========================================================
// example in 'React: Up & Running'
// ========================================================

const profile = {
  firstname: 'Jessie',
  lastname: 'Pinkman',
  gender: 'male',
  acceptedTOC: false,
}

function updateProfile({ target }) {
  profile[target.name] =
    target.type === 'checkbox' ? target.checked === true : target.value
  console.log(`updateProfile::${JSON.stringify(profile)}`)
}

function updateProfile2(event) {
  event.preventDefault()
  const form = event.target
  Object.keys(profile).forEach((name) => {
    const element = form[name]
    profile[name] = element.type === 'checkbox' ? element.checked === true : element.value
  })
  console.log(`updateProfile2::${JSON.stringify(profile)}`)
}

// Example of uncontrolled component: no `value`/`checked`
export function UncontrolledForm() {
  return (
    <form
      onChange={updateProfile}>
      <label>
        First name:{' '}
        <input type="text" name="firstname" defaultValue={profile.firstname} />
      </label>
      <br />
      <label>
        Last name:{' '}
        <input type="text" name="lastname" defaultValue={profile.lastname} />
      </label>
      <br />
      Gender:
      <label>
        <input
          type="radio"
          name="gender"
          defaultChecked={profile.gender === 'male'}
          value="male"
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          defaultChecked={profile.gender === 'female'}
          value="female"
        />
        Female
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="acceptTOC"
          defaultChecked={profile.acceptedTOC === true}
        />
        I accept terms and things
      </label>
    </form>
  )
}

export function UncontrolledFormWithSubmit() {
  return (
    <form
      onSubmit={updateProfile2}>
      <label>
        First name:{' '}
        <input type="text" name="firstname" defaultValue={profile.firstname} />
      </label>
      <br />
      <label>
        Last name:{' '}
        <input type="text" name="lastname" defaultValue={profile.lastname} />
      </label>
      <br />
      Gender:
      <label>
        <input
          type="radio"
          name="gender"
          defaultChecked={profile.gender === 'male'}
          value="male"
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          defaultChecked={profile.gender === 'female'}
          value="female"
        />
        Female
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="acceptedTOC"
          defaultChecked={profile.acceptedTOC === true}
        />
        I accept terms and things
      </label>
      <br />
      <label>
        <input type='submit' value="Save" />
      </label>
    </form>
  )
}

