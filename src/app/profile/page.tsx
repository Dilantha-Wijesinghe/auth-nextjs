"use client"
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import ClientOnly from '../../../components/ClientOnly';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const page = () => {

  const router = useRouter(); // for redirecting
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

  return (
    <ClientOnly>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile</h1>
        <hr />
        <p>Profile page</p>
        <hr />
        <button 
          onClick={logout}
          className='bg-blue-800 mt-4 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'>Logout</button>
      </div>
    </ClientOnly>
  );
};

export default page;
