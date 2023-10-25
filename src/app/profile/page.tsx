"use client"
import axios from 'axios';
import Link from 'next/link';
import React, {useState} from 'react';
import ClientOnly from '../../../components/ClientOnly';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const page = () => {

  const router = useRouter(); // for redirecting
  const [data, setData] = useState("nothing")
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out successfully");
      router.push("/login");

    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me")
    console.log(res.data);
    setData(res.data.data._id)
  }

  return (
    <ClientOnly>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile</h1>
        <hr />
        <p>Profile page</p>
        <h2 className='p-1 m-4 rounded bg-purple-900'>{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
        <hr />
        <button 
          onClick={logout}
          className='bg-blue-800 mt-4 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'>Logout</button>

        <button 
          onClick={getUserDetails}
          className='bg-purple-700 mt-4 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded'>Get User Details</button>
      </div>
    </ClientOnly>
  );
};

export default page;
