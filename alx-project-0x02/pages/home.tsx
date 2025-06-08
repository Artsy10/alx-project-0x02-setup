// pages/home.tsx
import React from 'react';
import Card from '../components/common/Card';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>

      <Card 
        title="Card 1 Title" 
        content="This is the first card's content." 
      />

      <Card 
        title="Card 2 Title" 
        content="This is the second card's content." 
      />
    </div>
  );
}
