import React, { useState } from 'react'
import Layout from './Layout'
import Homeadmin from './Homeadmin'
import Homeuser from './Homeuser'

function Homenormal() {
  const [sector, setSector] = useState("React - Assessment")

  const handleClick = (value) => {
    if (value === "Homeuser") {
      setSector("Home - User Sector")
    } else if (value === "Homeadmin") {
      setSector("Home - Admin Sector")
    }
  }

  return (
    <Layout>
      <h1>
        Generation Thailand<br /> {sector}
      </h1>
      <button onClick={() => handleClick("Homeuser")}>
        User Home Sector
      </button>
      <button onClick={() => handleClick("Homeadmin")}>
        Admin Home Sector
      </button>
      {sector === "Homeadmin" && <Homeadmin />}
      {sector === "Homeuser" && <Homeuser />}
    </Layout>
  )
}

export default Homenormal
