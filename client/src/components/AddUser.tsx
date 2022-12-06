import React , {useState} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import {CREATE_USER} from '../graphql/mutation';
import { GET_ALL_USER } from '../graphql/queries';

function AddUser() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {refetch}= useQuery(GET_ALL_USER)
  const [createUser] = useMutation(CREATE_USER);

  return (
    <div>
    <input
      type="text"
      placeholder="name"
      onChange={(e) => setName(e.target.value)}
    />
    <input
      type="text"
      placeholder="username"
      onChange={(e) => setUsername(e.target.value)}
    />
    <input
      type="password"
      placeholder="password"
      onChange={(e) => setPassword(e.target.value)}
    />
    <button
      onClick={() =>
        {createUser({
          variables: {
            name: name,
            username: username,
            password: password,
          },
        });
        refetch();
      }
        
      }
    >
      ADD USER
    </button>
  </div>
  )
}

export default AddUser