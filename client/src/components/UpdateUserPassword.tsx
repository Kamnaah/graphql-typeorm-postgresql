import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import {UPDATE_PASSWORD} from '../graphql/mutation'

function UpdateUserPassword() {
  const [username , setUsername]= useState('');
  const [oldpassword, setOldpassword]= useState('');
  const [newpassword , setNewpassword]= useState('');
  const [changePassword]= useMutation(UPDATE_PASSWORD)
  return (
    <div>
      <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
      <input type="password" placeholder="old password" onChange={(e)=>setOldpassword(e.target.value)} />
      <input type="password" placeholder="new password" onChange={(e)=>setNewpassword(e.target.value)} />
      <button onClick={()=>{changePassword({
        variables: {username: username , oldPassword: oldpassword , newPassword: newpassword}
      });
      }}>Change Password</button>
    </div>
  );
}

export default UpdateUserPassword;
