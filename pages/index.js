import Head from 'next/head';
import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import axios from 'axios';
import { signIn, signOut, useSession } from 'next-auth/react';

function index() {
  const { data: session, status } = useSession();

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen">
        <button onClick={() => signIn()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Ecommerce @ Teleport</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <HomePage />

        {/* ProductFeed */}
        {/* Add your product feed component here */}
      </main>
    </div>
  );
}

export default index;
