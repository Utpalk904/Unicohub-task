import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';

const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=> {
    const getUsers = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setUsers(response.data.users);
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    }
    getUsers();
  },[])

  return (
    <div>
      <Navbar />
      <div className='flex flex-wrap gap-5 justify-center items-center px-10'>
        {users.length!==0 && users.map((user)=>(
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default Users;