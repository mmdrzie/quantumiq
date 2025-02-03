'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import TypewriterClient from "@/components/TypewriterClient";
import { RocketIcon, ShieldIcon, PulseIcon } from "@/components/icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <main className="container mx-auto px-4 py-12 md:py-20">
        {/* Logo Section */}
       

        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-50 to-blue-500 mb-6">
            QuantumiQ

          </h1>
          <div className="max-w-2xl mx-auto text-gray-300 text-lg">
            
          </div>
        </div>

        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-50 to-blue-500 mb-6">
            Next-Gen AI Trading Platform
          </h1>
          <div className="max-w-2xl mx-auto text-gray-300 text-lg">
            <TypewriterClient />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex justify-center gap-6 mt-20"
        >
          <Link
            href="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
          >
            Get Started
          </Link>
          <Link
            href="/docs"
            className="bg-purple-700 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
          >
            Docs
          </Link>
        </motion.div>
      </main>
    </div>
  );
}