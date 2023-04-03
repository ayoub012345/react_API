import React  from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import "./style.css";
 function UserList()
 {
    const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUsers(response.data))
      .catch((error) => console.log(error));
  }, []);
  return(
    
    <div>
        <table>
		<thead>
			<tr>
				<th>id</th>
				<th>username</th>
				<th>name</th>
				<th>email</th>
			</tr>
		</thead>
		<tbody>
        {listOfUsers.map((user)=>{
            return(<tr>
				<td>{user.id}</td>
				<td>{user.username}</td>
				<td>{user.name}</td>
				<td>{user.email}</td>
			</tr>)
        })}
        </tbody>
	</table>

    </div>
  );
 }
 export default UserList;