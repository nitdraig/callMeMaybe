import Head from 'next/head';
import Navbar from './components/Navbar';
import Body from './sections/Body';
import Footer from './components/Footer';

export default function MyHome() {
  return (
    <section className="min-h-screen  bg-gray-100">
      <Head>
        <title>My Next.js Base Project</title>
        <meta
          name="description"
          content="A base project setup for Next.js with best practices."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Body />
      <Footer />
    </section>
  );
}
