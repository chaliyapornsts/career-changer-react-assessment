import React, { useState } from 'react'
import Layout from './Layout'
import Homeuser from './Homeuser';
import Homeadmin from './Homeadmin';
/* import Button from './Button' */

function Homenormal() {
  /* const {employee, setEmployee} = useState(); */
  const {sector, setSector} = useState();
  const handleClick = (value) => {
      setSector(value);
  }
  return (
    <div>
    <Layout>
    <h1>
        Generation Thailand<br /> React - Assessment
    </h1>
    <h1>{sector === "user"
                ? "Home - User Sector"
                : sector === "admin"
                ? "Home - Admin Sector"
                : "React Assessment"}</h1>
    {/* <Button/> */}
    <button onClick={() => handleClick("Homeuser")}>
        User Home Sector
    </button>
    <button onClick={() => handleClick("Homeadmin")}>
        Admin Home Sector
    </button>
    {/* {sector === "Homeuser" && <Homeuser />}
    {sector === "Homeadmin" && <Homeadmin />} */}
    <Nun choice = {sector} />
    </Layout>
    </div>
  )
}
    function Nun (props) {
      if(props.choice === "Homeadmin") {
        return <Homeadmin />;
      } else if (props.choice === "Homeuser") {
        return <Homeuser />;
      } else {
        return <p>nothing</p>
      }
    }
export default Homenormal