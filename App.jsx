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


const PostRequestComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handlePostRequest = () => {
    // Define the URL for the POST request
    const url = 'https://reqres.in/api/users/201'; // Example endpoint for creating a user
    const postData = {
      name: name,
      job: job
    };

    // Send the POST request using axios
    axios.post(url, postData)
      .then(response => {
        setData(response.data); // Set the response data
        setError(null); // Clear any previous errors
      })
      .catch(err => {
        setError(err); // Set the error
        setData(null); // Clear any previous data
      });
  };

  return (
    <div>
      <h1>POST Request Example</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Job"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={handlePostRequest}>Send POST Request</button>
      {error && (
        <div>
          <h3>Error:</h3>
          <pre>{error.message}</pre>
        </div>
      )}
      {data && (
        <div>
          <h3>Response Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

 



 

export {App,New, PostRequestComponent}



