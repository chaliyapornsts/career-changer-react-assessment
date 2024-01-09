import React from 'react'

function Homeuser() {
  return (
    <div>
      <form>
          <label htmlFor="create">Create User Here</label>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
          <input type="text" name="position" placeholder="Position" />
          <button> Save</button>
        </form>
      </div>
  )
}

export default Homeuser

