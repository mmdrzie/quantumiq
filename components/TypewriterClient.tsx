'use client';

import dynamic from 'next/dynamic';

const Typewriter = dynamic(() => import('./Typewriter'), {
  ssr: false,
  loading: () => <div className="h-12 bg-gray-800/50 rounded-lg animate-pulse" />,
});

export default function TypewriterClient() {
  return <Typewriter />;
}