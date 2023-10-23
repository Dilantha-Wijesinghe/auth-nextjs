"use client";
import Link from "next/link";
import React, {useEffect} from 'react'
import {useRouter} from "next/navigation";
import axios from "axios";
import ClientOnly from "../../../components/ClientOnly";
import toast from "react-hot-toast";

const page = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  })

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  
  const onLogin= async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile");

    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0){
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user]);

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