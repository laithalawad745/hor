// components/PricingPremium.tsx
"use client";
import { useLanguage } from "../context/LanguageContext";
import { Check, ArrowRight, ArrowLeft, Star } from 'lucide-react';
import Link from 'next/link';

const PricingPremium = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="relative bg-[#1f1237]/80 backdrop-blur-lg rounded-2xl border-2 border-purple-600 p-8 transform scale-105 shadow-2xl">
      {/* Popular Badge */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-1 px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
          <Star className="h-4 w-4 text-white fill-white" />
          <span className="text-sm font-semibold text-white">{t('pricing.premium.popular')}</span>
        </div>
      </div>

      {/* Header */}
      <div className="mb-6 mt-2">
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {t('pricing.premium.title')}
        </h3>
        <p className="text-gray-400">
          {t('pricing.premium.subtitle')}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold">$20</span>
          <span className="text-gray-400">/{t('pricing.perMonth')}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {['feature1', 'feature2', 'feature3'].map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="h-3 w-3 text-white" />
            </div>
            <span className="text-gray-300">{t(`pricing.premium.${feature}`)}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link href="/Payment" className="group w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg transition-all duration-300">
        <span className="font-semibold">{t('pricing.premium.button')}</span>
        {isRTL ? (
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        ) : (
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        )}
      </Link>
    </div>
  );
};

export default PricingPremium;