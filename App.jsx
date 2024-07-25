import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2')
      .then(response => {
        setUsers(response.data.data); // Assuming the users are in the 'data' property
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h2>{user.id}</h2>
            <h2>{user.first_name} {user.last_name}</h2>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <p>{user.email}</p>
            <p>{user.email}</p> {/* Second occurrence of the email */}
          </li>
        ))}
      </ul>
    </div>
  );
}




function New() {
  const [user,setUsers] = useState([])

  useEffect(() => {
    axios.get('https://reqres.in/api/users/2')
    .then(response => {
      setUsers(response.data.data)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  },[])

  return (
    <div>
      <h1>GET REQUEST SECOND STARTS FROM HERE</h1>
      <p1>{user.id}</p1>

    </div>

  )
}

export {App,New};
