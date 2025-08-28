// components/PricingBasic.tsx
"use client";
import { useLanguage } from "../context/LanguageContext";
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const PricingBasic = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="bg-[#1f1237]/80 backdrop-blur-lg rounded-2xl border border-purple-800/30 p-8 hover:border-purple-600/50 transition-all duration-300">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          {t('pricing.basic.title')}
        </h3>
        <p className="text-gray-400">
          {t('pricing.basic.subtitle')}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold">$50</span>
          <span className="text-gray-400">/{t('pricing.perMonth')}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {['feature1', 'feature2', 'feature3'].map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="h-3 w-3 text-white" />
            </div>
            <span className="text-gray-300">{t(`pricing.basic.${feature}`)}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link href="/Payment" className="group w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-lg transition-all duration-300">
        <span className="font-semibold">{t('pricing.basic.button')}</span>
        {isRTL ? (
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        ) : (
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        )}
      </Link>
    </div>
  );
};

export default PricingBasic;