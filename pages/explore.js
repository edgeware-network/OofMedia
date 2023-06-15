import React from 'react';
import Head from "next/head";
import { Explore, Sidebar, Widgets } from "../components";

const ExplorePage = () => {
  return (
    <div className="bg-[#121212] min-h-screen mx-auto max-w-6xl p-2 overflow-hidden ">
    <Head>
      <title>Explore / OofMedia</title>
      <link rel="icon" href="/logo.svg" />
    </Head>
    <main className="grid grid-cols-9">
      <Sidebar />
      <Explore />
      <Widgets />
    </main>
  </div>
  );
};

export default ExplorePage;