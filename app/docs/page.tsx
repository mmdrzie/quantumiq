// app/docs/page.tsx
'use client';

import { useState } from "react";
import { motion } from "framer-motion";


const Docs = () => {
  const [selectedSection, setSelectedSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "development-phases", title: "Development Phases" },
    { id: "technology", title: "Technology Stack & Tools" },
    { id: "how-it-works", title: "How QuantumIQ Works" },
    { id: "future-plans", title: "Future Plans & Expansion" },
    { id: "website-details", title: "Website Details" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900">
      {/* Sidebar Navigation */}
      <aside className="w-1/4 bg-gray-900 p-6 ">
        <h2 className="text-xl font-bold mb-4">{'documents & Overview'}</h2>
        <ul>
          {sections.map((section) => (
            <li
              key={section.id}
              className={`cursor-pointer py-2 px-4 rounded-lg transition ${
                selectedSection === section.id ? "bg-blue-500 text-white" : "hover:bg-blue-400"
              }`}
              onClick={() => setSelectedSection(section.id)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-10">
        <motion.div
          key={selectedSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {selectedSection === "introduction" && (
            <section>
              <h1 className="text-3xl font-bold mb-4"> {'What is QuantumIQ?'}</h1>

              <p>{'QuantumIQ is an AI-powered trading platform designed to analyze market movements, provide high-accuracy trading signals. Built with advanced AI models,QuantumIQ aims to predict market activities and forecast future price movements with precision.The platform is designed for traders,institutions, and investors who seek a cutting-edge tool for market analysis and automated trading.'}</p><br /><br />
              
              
              <h1 className="text-3xl font-bold mb-4"> {'Core Functionalities'}</h1>

              <p>{'AI Market Analysis: Uses deep learning to detect market activities.Automated Trading: AI-powered execution of trades based on precise signals.Live Market Data Integration: Real-time data processing from sources.Advanced Signal System: Generates safe entry points with high accuracy.'}</p><br /><br />
              
              <h1 className="text-3xl font-bold mb-4"> {'Hybrid Models'}</h1>
              
              <p>{'combination of Vision Transformers EfficientNet (CNNs with optimized scaling) or hybrid architectures ( ResNet + Transformer) for faster inference while retaining accuracy. CNNs, and LSTMs for market prediction.RL with Proximal Policy Optimization (PPO) to let the AI adapt to live market conditions. Tools like Ray RLlib simplify implementation.Designed to act like a "UAV radar" to detect hidden market patterns.Built by a team of AI technicians, market makers.'}</p><br /><br />
              

              <h1 className="text-3xl font-bold mb-4">  {'attention mechanisms'} </h1> 

              <p>{'reduces latency and improves interpretability.'}</p><br /><br />


              <h1 className="text-3xl font-bold mb-4"> {'Optuna'}</h1>
              <p>{'For hyperparameter tuning.'}</p><br /><br />
          </section>
          )}

          {selectedSection === "development-phases" && (
            <section>
              <h1 className="text-3xl font-bold mb-4">{'Development Phases'}</h1>
              <p>{'The project is structured into several phases, includingresearch, AI training, real-time testing, and public release.'}</p><br /><br />

              <h1 className="text-3xl font-bold mb-4">{'Phase 1: Research & Planning'}</h1>
              <p>{'Define key features and functionalities.Research AI models suited for market pattern recognition.Plan project architecture and data requirements.Establish privacy and security measures.'}</p><br /><br />
              <h1 className="text-3xl font-bold mb-4">{'Phase 2: AI Model Training & Testing'}</h1>
              <p>{'Train AI models using historical market data.Test different architectures (ViTs, CNNs, LSTMs) for accuracy.EfficientNet (CNNs with optimized scaling) or hybrid architectures ( ResNet + Transformer) for faster inference while retaining accuracy.Implement feature engineering for market prediction.Evaluate AI performance on real-time market scenarios.'}</p><br /><br />

              <h1 className="text-3xl font-bold mb-4">{'Phase 2.5: Model Optimization'}</h1>
              <p>{'Quantize models with TensorRT for GPU acceleration.Implement model distillation to reduce size without losing accuracy.'}</p><br /><br />
              <h1 className="text-3xl font-bold mb-4">{'Phase 3.5: Institutional Tools'}</h1>
              <p>{'Add White Label Solutions for hedge funds to rebrand QuantumIQ.Develop a Risk Dashboard with VaR (Value at Risk) metrics.'}</p><br /><br />
              <h1 className="text-3xl font-bold mb-4">{'Phase 4: Real-time Market Testing'}</h1>
              <p>{'Deploy AI models in a real-time market environment.Monitor AI performance and refine signal accuracy.Ensure synchronized movement of indicators when panning the chart.Optimize execution speed and trading response times.'}</p><br /><br />

              <h1 className="text-3xl font-bold mb-4">{'Phase 5: Beta Launch & User Testing'}</h1>
              <p>{'Release a limited version for early adopters.Collect feedback and improve usability.Implement security audits and system hardening.'}</p><br /><br />

              <h1 className="text-3xl font-bold mb-4">{'Phase 6: Full Public Release & Regulatory Certification'}</h1>
              <p>{'Scale AI model for broader market conditions.Release complete documentation and onboarding guides.Introduce premium and institutional trading features.Expand marketing and social engagement efforts.Pursue SOC 2 Compliance for enterprise trust.'}</p><br /><br />
            </section>
          )}




          {selectedSection === "technology" && (
            <section>
              <h1 className="text-3xl font-bold mb-4">{'Technology Stack & Tools'}</h1>
              <p></p>
              <h1 className="text-2xl font-bold mb-4">{'BETA AI & Machine Learning'}</h1>
              <p>{'AI model development.EfficientNet, Hybrid Models (ResNet + Transformer) – Optimized recognition.CNNs, LSTMs – Market trend prediction and sequence analysis.Data preprocessing and feature engineering.Optuna – Hyperparameter tuning.SHAP/LIME – Explain AI decisions to users.Ray RLlib – Reinforcement Learning for adaptive trading.'}</p><br /><br />
              <h1 className="text-2xl font-bold mb-4">{'Data Storage & APIs'}</h1>
              <p>{'Upgrade: TimescaleDB + Redis – Time-series optimization & caching.Real-time market data.Historical data collection.Custom Web Scrapers – Additional market insights.'}</p><br /><br />
              <h1 className="text-2xl font-bold mb-4">{'Backend & Infrastructure'}</h1>
              <p>{'Current: FastAPIUpgrade: High-performance ML inference.Current: Basic LoggingUpgrade: Real-time system/metrics tracking.Data storage.Containerized deployment.'}</p><br /><br />
              <h1 className="text-2xl font-bold mb-4">{'CI/CD & Monitoring'}</h1>
              <p>{'Current: Manual DeploymentUpgrade: Automated testing/deployment.'}</p><br /><br />
              <h1 className="text-2xl font-bold mb-4">{'Advanced Market Detection'}</h1>
              <p>{'AI constantly refines its knowledge using reinforcement learning.Predicts market shifts before they happen.Auto-adapts to different market conditions.'}</p><br /><br />
            </section>
          )}

          {selectedSection === "how-it-works" && (
            <section>
              <h1 className="text-3xl font-bold mb-4">{'How QuantumIQ Works'}</h1>
              <p>{'The platform collects real-time market data, applies AIalgorithms for analysis, and provides automated trading signals.'}</p><br /><br />
              <h1 className="text-2xl font-bold mb-4">{'Data Collection & Processing'}</h1>
              <p>{'Fetches real-time and historical market data.Processes data for trend analysis, volume movements, and order book insights.'}</p><br /><br />
              <h1 className="text-2xl font-bold mb-4">{'AI Market Analysis & Predictions'}</h1>
              <p>{'AI detects patterns, trends, and anomalies.Predicts safe entry points based on market structure.Warns users of potential market manipulations.'}</p><br /><br />
              <h1 className="text-2xl font-bold mb-4">{'Charting & Signal Integration'}</h1>
              <p>{'Charts automatically adapt to AI-detected signals.Indicators remain synchronized while panning.'}</p><br /><br />
              <h1 className="text-2xl font-bold mb-4">{'Automated Trading & Signal Generation'}</h1>
              <p>{'Users can opt for auto-executed trades based on AI signals.AI provides buy/sell signals with calculated risk management.AI continuously improves through reinforcement learning.'}</p><br /><br />


            </section>
          )}



          {selectedSection === "future-plans" && (
            <section>


              <h1 className="text-3xl font-bold mb-4">{'Future Plans & Expansion'}</h1>
              <p>{'Plans include multi-asset support, real-time AI learning, andinstitutional adoption.'}</p><br /><br />
              

              <h1 className="text-2xl font-bold mb-4">{'Scaling AI Models'}</h1>
              <p>{'Integrate multi-model AI for increased accuracy.Introduce real-time AI learning from market changes.'}</p><br /><br />
              
              <h1 className="text-2xl font-bold mb-4">{'Bias Mitigation'}</h1>
              <p>{'Audit models for overfitting to specific assets/market conditions using AI Fairness 360.'}</p><br /><br />


              <h1 className="text-2xl font-bold mb-4">{'Regulatory Safeguards'}</h1>
              <p>{'Log all trades for audit trails (required by FINRA/SEC).'}</p><br /><br />


              <h1 className="text-2xl font-bold mb-4">{'More Trading Features'}</h1>
              <p>{'Implement options trading AI.Introduce multi-asset support (crypto, forex, stocks, commodities).'}</p><br /><br />


              <h1 className="text-2xl font-bold mb-4">{'Institutional & Retail User Adoption'}</h1>
              <p>{'Offer API access for hedge funds and institutions.Develop retail-friendly trading solutions'}</p><br /><br />


            </section>
          )}

          {selectedSection === "website-details" && (
            <section>
              <h1 className="text-3xl font-bold mb-4">{'Website Details'}</h1>
              <p>{'Visit QuantumIQ Website for more details, user dashboard, and market analysis.User Dashboard: Secure login with access to AI trading insights.Blog & Market Analysis: Regular updates on market trends and AI advancements.Support & Community: Live chat, forums, and documentation for users.'}</p>
            </section>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default Docs;
