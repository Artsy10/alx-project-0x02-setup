// pages/index.tsx
import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | ALX Project</title>
      </Head>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-center">
          Welcome to ALX Project 2!
        </h1>
      </main>
    </>
  );
}
