// components/layout/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '1rem', background: '#f0f0f0' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
