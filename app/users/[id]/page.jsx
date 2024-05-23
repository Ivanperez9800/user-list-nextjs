import React from 'react'

async function GetUserById(id){
    try {
        const res = await fetch(`https://reqres.in/api/users/${id}`)
        const data = await res.json();
        return data.data

    } catch (error) {
        console.log(error)
    }
}

async function UserPage({params}) {
    // console.log(params.id)
    const user = await GetUserById(params.id)
  return (
    <div className=' bg-slate-400 p-10 rounded-md ' >
        <img src={user.avatar} alt={user.name} className='m-auto my-4'  />
        <h3 className='font-bold text-3xl' > {user.id} {user.first_name} {user.last_name} </h3>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default UserPage