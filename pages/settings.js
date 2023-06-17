import React from 'react';
import Head from "next/head";
import { Settings, Sidebar, Widgets } from "../components";

const SettingsPage = () => {
  return (
    <div className='bg-[#121212]'>
      <div className="min-h-screen mx-auto max-w-6xl p-2 overflow-hidden ">
        <Head>
          <title>Settings / OofMedia</title>
          <link rel="icon" href="/logo.svg" />
        </Head>
        <main className="grid grid-cols-10">
          <Sidebar />
          <Settings /> 
          <Widgets />
        </main>
      </div>
    </div>

  );
};

export default SettingsPage;