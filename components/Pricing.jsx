// components/Pricing.tsx
"use client";
import PricingBasic from "./PricingBasic";
import PricingPremium from "./PricingPremium";
import PricingEnterprise from "./PricingEnterprise";
import { useLanguage } from "../context/LanguageContext";

const Pricing = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="py-20 px-4" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t('pricing.sectionTitle')}
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('pricing.sectionSubtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingBasic />
          <PricingPremium />
          <PricingEnterprise />
        </div>
      </div>
    </div>
  );
};

export default Pricing;