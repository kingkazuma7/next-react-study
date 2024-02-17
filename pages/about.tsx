import Head from 'next/head';
import Image from "next/image";
import Footer from "../componets/Footer";
import Links from "../componets/Links";

export default function About() {
  return (
    <>
      <Head>
        <title>about title</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>About</h1>
        <Links />
      </main>
      <Footer />
    </>
  );
}
