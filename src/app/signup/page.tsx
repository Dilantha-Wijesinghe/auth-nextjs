"use client";
import Link from "next/link";
import React from 'react'
import {useRouter} from "next/navigation";
import {axios} from "axios";

const page = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })
  
  const onSignup = async () => {

  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Signup</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input 
      className="p-2 border border-gray-500 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        id="username"
        type="text" 
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        placeholder="username"
      />
      <label htmlFor="email">email</label>
      <input 
      className="p-2 border border-gray-500 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        id="email"
        type="email" 
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input 
      className="p-2 border border-gray-500 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        id="password"
        type="password" 
        value={user.password}
        onChange={(e) => setUser({...user,password: e.target.value})}
        placeholder="password"
      />
      <button
        onClick={onSignup}
        className="p-2 border border-gray-500 rounded-lg mb-2 mt-6 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        Signup here
      </button>
      <Link href="/login">Visit login page</Link>
    </div>
  )
}

export default page