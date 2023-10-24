import React from 'react';
import ClientOnly from '../../../components/ClientOnly';

const page = () => {
  return (
    <ClientOnly>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile</h1>
        <hr />
        <p>Profile page</p>
        <hr />
        <button className='bg-blue-800 mt-4 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'>Logout</button>
      </div>
    </ClientOnly>
  );
};

export default page;
