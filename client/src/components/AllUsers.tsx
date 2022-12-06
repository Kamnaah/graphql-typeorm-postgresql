import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_USER} from '../graphql/queries';
import {DELETE_USER} from '../graphql/mutation'



//function method-----------

function AllUsers() {
  const { data , refetch} = useQuery(GET_ALL_USER);
  const [deleteUser]= useMutation(DELETE_USER);
  return (
    <div>{
      data && (data.getAllUsers.map((user: any, key: any)=>{
        return(
          <div key={key}>
          <h1>Name: {user.name} / Username: {user.username}</h1>
          <h1>Password: {user.password}</h1>
          <button onClick={()=>{deleteUser({
            variables: {id: user.id}
          });
          refetch();
          }}>DELETE</button>
          </div>
        )
      }))
    }</div>
  )
}

export default AllUsers