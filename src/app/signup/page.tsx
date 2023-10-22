"use client";
import Link from "next/link";
import React from 'react'
import {useRouter} from "next/navigation";
import {axios} from "axios";
import ClientOnly from "../../../components/ClientOnly";

const page = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })
  
  const onSignup = async () => {

  }

  return (
    <ClientOnly>
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1>Signup</h1>
        <hr />
        <label htmlFor="username">username</label>
        <input 
        className="p-2 mb-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          id="username"
          type="text" 
          value={user.username}
          onChange={(e) => setUser({...user, username: e.target.value})}
          placeholder="username"
        />
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
          onClick={onSignup}
          className="p-2 mt-6 mb-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Signup here
        </button>
        <Link href="/login">Visit login page</Link>
      </div>
    </ClientOnly>
  )
}

export default page