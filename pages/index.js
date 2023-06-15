import Head from "next/head";
import { Feed, Sidebar, Widgets } from "../components";

export default function Home() {
  return (
    <div className="bg-[#121212] min-h-screen mx-auto max-w-6xl p-2 overflow-hidden">
      <Head>
        <title>OofMedia</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}
