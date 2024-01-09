import React, { useState, useEffect } from 'react';
import { mockEmployees } from './mockEmployees';
import Layout from "./Layout";

/* function Homeadmin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(mockEmployees);
  }, []); */
  const Homeadmin = () => {
    const [users, setUsers] = useState([]);
    const fetchData = () => {
      setUsers(mockEmployees)
    }
    useEffect(fetchData,[])

  return (
    <Layout>
      <table>
        <thead>
          <tr className="table-row">
            <th>Name</th>
            <th>Lastname</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="table-row">
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default Homeadmin;
