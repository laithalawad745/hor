// components/Hero.tsx
"use client";
import { useLanguage } from "../context/LanguageContext";
import { ArrowRight, ArrowLeft, Sparkles, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/service-1.png')" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Overlay للتحسين من القراءة */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/30 backdrop-blur-lg rounded-full border border-purple-500/40 mb-8">
          <Sparkles className="h-4 w-4 text-purple-400" />
          <span className="text-sm text-purple-300">{t('hero.badge')}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            {t('hero.welcome')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/Payment" className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-xl">
            <span className="text-lg font-semibold">{t('hero.startFree')}</span>
            {isRTL ? (
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            )}
          </Link>
          {/* <Link href="#info-section" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-lg transition-all duration-300 border border-white/30 shadow-xl">
            <span className="text-lg font-semibold">{t('hero.learnMore')}</span>
          </Link> */}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="bg-[#1f1237]/90 backdrop-blur-lg rounded-xl p-6 border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">{t('hero.feature1.title')}</h3>
            <p className="text-gray-300 text-sm">{t('hero.feature1.description')}</p>
          </div>

          <div className="bg-[#1f1237]/90 backdrop-blur-lg rounded-xl p-6 border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">{t('hero.feature2.title')}</h3>
            <p className="text-gray-300 text-sm">{t('hero.feature2.description')}</p>
          </div>

          <div className="bg-[#1f1237]/90 backdrop-blur-lg rounded-xl p-6 border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">{t('hero.feature3.title')}</h3>
            <p className="text-gray-300 text-sm">{t('hero.feature3.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;