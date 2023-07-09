import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className='flex flex-col shadow-xl justify-center items-center gap-2 text-center w-[250px] bg-[rgb(255,255,255,.2)] px-4 py-3'>
        <div>
            <img src={user.image} alt="user" className='w-[200px]' />
        </div>
        <div className=''>
            Name: {user.firstName + ' ' + user.lastName}
        </div>
        <div>
            Age: {user.age}
        </div>
        <div>
            Email: {user.email}
        </div>
        <div>
            Height: {user.height}
        </div>
        <div>
            Weight: {user.weight}
        </div>
        <div>
            Address: {user.address.address + ', ' + user.address.city + ', ' + user.address.state}
        </div>
    </div>
  )
}

export default UserCard;