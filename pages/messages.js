import React from 'react';
import Head from "next/head";
import { Message, Sidebar, Widgets } from "../components";

const MessagePage = () => {
  return (
    <div className='bg-[#121212]'>
      <div className="min-h-screen mx-auto max-w-6xl p-2 overflow-hidden ">
        <Head>
          <title>Messages / OofMedia</title>
          <link rel="icon" href="/logo.svg" />
        </Head>
        <main className="grid grid-cols-10">
          <Sidebar />
          <Message />
          <Widgets />
        </main>
      </div>
  </div>
  );
};

export default MessagePage;