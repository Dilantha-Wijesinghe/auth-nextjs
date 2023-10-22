import React from 'react';
import ClientOnly from '../../../components/ClientOnly';

const page = () => {
  return (
    <ClientOnly>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile</h1>
        <hr />
        <p>Profile page</p>
      </div>
    </ClientOnly>
  );
};

export default page;
