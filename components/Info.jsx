// components/Info.tsx
"use client";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { Users, Shield, Bot, Settings, CheckCircle, Zap } from 'lucide-react';

const Info = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="py-20 px-4" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t('info.sectionTitle')}
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('info.sectionSubtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1 - Group Management */}
          <div className="bg-[#1f1237]/80 backdrop-blur-lg rounded-2xl border border-purple-800/30 overflow-hidden hover:border-purple-600/50 transition-all duration-300">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{t("info.groupManagement.title")}</h3>
              </div>
              
              <p className="text-gray-400 mb-6">
                {t("info.groupManagement.description")}
              </p>

              <div className="space-y-3">
                {['feature1', 'feature2', 'feature3'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{t(`info.groupManagement.${feature}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 - Complete Management */}
          <div className="bg-[#1f1237]/80 backdrop-blur-lg rounded-2xl border border-purple-800/30 overflow-hidden hover:border-purple-600/50 transition-all duration-300">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{t("info.completeManagement.title")}</h3>
              </div>
              
              <p className="text-gray-400 mb-6">
                {t("info.completeManagement.description")}
              </p>

              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-xl p-5 border border-purple-700/30">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-5 w-5 text-purple-400" />
                  <h4 className="font-semibold">{t("info.completeManagement.noteTitle")}</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  {t("info.completeManagement.note")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {['additionalFeature1', 'additionalFeature2', 'additionalFeature3'].map((feature, index) => (
            <div key={index} className="bg-[#1f1237]/80 backdrop-blur-lg rounded-xl p-6 border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                {index === 0 && <Bot className="h-5 w-5 text-white" />}
                {index === 1 && <Settings className="h-5 w-5 text-white" />}
                {index === 2 && <Shield className="h-5 w-5 text-white" />}
              </div>
              <h4 className="text-lg font-semibold mb-2">{t(`info.${feature}.title`)}</h4>
              <p className="text-gray-400 text-sm">{t(`info.${feature}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;