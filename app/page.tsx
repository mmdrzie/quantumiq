'use client';

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import TypewriterClient from "@/components/TypewriterClient";
import { RocketIcon, ShieldIcon, PulseIcon } from "@/components/icons";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn] = useState(false); // Simulating login state
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure the video plays on mobile browsers
      const playVideo = () => {
        video.play().catch(err => console.log("Autoplay prevented:", err));
      };

      video.addEventListener("canplaythrough", playVideo);
      return () => video.removeEventListener("canplaythrough", playVideo);
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/" className="text-2xl font-bold text-white">
            QuantumiQ
          </Link >

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/signup" className="text-gray-300 hover:text-white transition duration-300">
              Get Started
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-white transition duration-300">
              Docs
            </Link>
            {isLoggedIn ? (
              <div className="flex items-center gap-2 text-gray-300">
                <User size={24} /> <span>Profile</span>
              </div>
            ) : (
              <Link href="/login" className="text-gray-300 hover:text-white transition duration-300">
                Login
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-black/90 backdrop-blur-md absolute top-full left-0 w-full border-b border-gray-800 py-4"
            >
              <div className="flex flex-col items-center gap-4">
                <Link href="/signup" className="text-gray-300 hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
                <Link href="/docs" className="text-gray-300 hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>
                  Docs
                </Link>
                {isLoggedIn ? (
                  <div className="text-gray-300">Profile</div>
                ) : (
                  <Link href="/login" className="text-gray-300 hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                )}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Background Video */}
      <video
        ref={videoRef} 
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/background.mp4" type="video/mp4" />
        <source src="/mobile.mp4" type="mobile/mp4" />
        <source src="/mobile.webm" type="mobile/webm" />
        Your browser does not support the video tag.
      </video>

      <main className="relative container mx-auto px-4 py-24 md:py-32">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-50 to-blue-500 mb-6">
            QuantumiQ
          </h1>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-50 to-blue-500 mb-6">
            Next-Gen AI Trading Platform<br /><br /><br />
          </h1>
          <div className="max-w-2xl mx-auto text-gray-300 text-lg">
            <TypewriterClient />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Market Predictions",
              description: "Real-time analysis using transformer models",
              icon: RocketIcon,
            },
            {
              title: "Risk Management",
              description: "Dynamic stop-loss optimization algorithms",
              icon: ShieldIcon,
            },
            {
              title: "Multi-Asset Support",
              description: "Crypto, stocks, forex, and commodities",
              icon: PulseIcon,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm"
            >
              <feature.icon className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center gap-6 mt-20">
          <Link href="/signup" className="bg-grey-100 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
            Get Started
          </Link>
          <Link href="/login" className="bg-grey hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
            Login
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
