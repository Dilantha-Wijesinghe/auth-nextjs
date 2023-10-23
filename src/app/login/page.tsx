"use client";
import Link from "next/link";
import React from 'react'
import {useRouter} from "next/navigation";
import axios from "axios";
import ClientOnly from "../../../components/ClientOnly";

const page = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  })
  
  const onLogin= async () => {

  }

  return (
    
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1>Login</h1>
        <hr />
        <label htmlFor="email">email</label>
        <input 
        className="p-2 mb-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          id="email"
          type="email" 
          value={user.email}
          onChange={(e) => setUser({...user, email: e.target.value})}
          placeholder="email"
        />
        <label htmlFor="password">password</label>
        <input 
        className="p-2 mb-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          id="password"
          type="password" 
          value={user.password}
          onChange={(e) => setUser({...user,password: e.target.value})}
          placeholder="password"
        />
        <button
          onClick={onLogin}
          className="p-2 mt-6 mb-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Login here
        </button>
        <Link href="/signup">Visit Signup page</Link>
      </div>
    
  )
}

export default page