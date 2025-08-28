// app/contact/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage, translations } from '@/context/LanguageContext'
import { 
  Send, MessageCircle, Mail, Globe, ArrowLeft, ArrowRight,
  MessageSquare, Phone, MapPin, Clock, CheckCircle,
  ExternalLink
} from 'lucide-react'

export default function ContactPage() {
  const router = useRouter()
  const { language, toggleLanguage, isRTL } = useLanguage()
  const t = translations[language as 'en' | 'ar'].contact
  
  const [selectedMethod, setSelectedMethod] = useState<'telegram' | 'email' | null>(null)

  return (
    <div className="min-h-screen bg-[#1a0a33] text-white relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* خلفية متحركة */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-[#1f1237]/80 backdrop-blur-lg shadow-lg border-b border-purple-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {t.header.title}
                </h1>
              </div>
              
              <div className="flex items-center gap-3">
                {/* زر تبديل اللغة */}
                <button
                  onClick={toggleLanguage}
                  className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg transition-all duration-300 border border-purple-500/30"
                >
                  <Globe className="h-5 w-5 text-purple-400" />
                  <span className="text-sm font-medium">{language === 'ar' ? 'EN' : 'العربية'}</span>
                </button>
                
                {/* زر العودة */}
                <button
                  onClick={() => router.push('/')}
                  className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg transition-all duration-300"
                >
                  {isRTL ? <ArrowRight className="h-5 w-5" /> : <ArrowLeft className="h-5 w-5" />}
                  <span>{t.header.backToHome}</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* العنوان الرئيسي */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {t.pageTitle}
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t.pageSubtitle}
            </p>
          </div>

          {/* اختيار طريقة التواصل */}
          {!selectedMethod && (
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {/* بطاقة تيليجرام */}
              <div
                onClick={() => setSelectedMethod('telegram')}
                className="cursor-pointer bg-[#1f1237]/80 backdrop-blur-lg rounded-2xl p-8 border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                    <Send className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{t.telegram.title}</h3>
                  <p className="text-gray-400 mb-6">{t.telegram.description}</p>
                  <div className="flex items-center gap-2 text-blue-400">
                    <span>{t.telegram.clickToChat}</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* بطاقة الإيميل */}
              <div
                onClick={() => setSelectedMethod('email')}
                className="cursor-pointer bg-[#1f1237]/80 backdrop-blur-lg rounded-2xl p-8 border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                    <Mail className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{t.email.title}</h3>
                  <p className="text-gray-400 mb-6">{t.email.description}</p>
                  <div className="flex items-center gap-2 text-purple-400">
                    <span>{t.email.clickToEmail}</span>
                    <MessageSquare className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* قسم تيليجرام */}
          {selectedMethod === 'telegram' && (
            <div className="max-w-2xl mx-auto">
              <button
                onClick={() => setSelectedMethod(null)}
                className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                {isRTL ? <ArrowRight className="h-5 w-5" /> : <ArrowLeft className="h-5 w-5" />}
                <span>{t.backToOptions}</span>
              </button>

              <div className="bg-[#1f1237]/80 backdrop-blur-lg rounded-2xl p-8 border border-purple-800/30">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="h-12 w-12 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{t.telegram.chatTitle}</h3>
                  <p className="text-gray-400 mb-8">{t.telegram.chatDescription}</p>
                  
                  <div className="space-y-4">
                    {/* معلومات التواصل */}
                    <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-xl p-6 border border-blue-700/30">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <MessageCircle className="h-6 w-6 text-blue-400" />
                        <span className="text-lg font-semibold">@Telecop_support</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-4">{t.telegram.availability}</p>
                      <div className="flex items-center justify-center gap-2 text-green-400">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{t.telegram.responseTime}</span>
                      </div>
                    </div>

                    {/* زر فتح تيليجرام */}
                    <a
                      href="https://t.me/Telecop_support"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-300"
                    >
                      <Send className="h-6 w-6" />
                      <span className="text-lg font-semibold">{t.telegram.openTelegram}</span>
                      <ExternalLink className="h-5 w-5" />
                    </a>

                    {/* ميزات التواصل عبر تيليجرام */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Clock className="h-6 w-6 text-blue-400" />
                        </div>
                        <h4 className="text-sm font-semibold mb-1">{t.telegram.feature1Title}</h4>
                        <p className="text-xs text-gray-400">{t.telegram.feature1Desc}</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <MessageCircle className="h-6 w-6 text-blue-400" />
                        </div>
                        <h4 className="text-sm font-semibold mb-1">{t.telegram.feature2Title}</h4>
                        <p className="text-xs text-gray-400">{t.telegram.feature2Desc}</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <CheckCircle className="h-6 w-6 text-blue-400" />
                        </div>
                        <h4 className="text-sm font-semibold mb-1">{t.telegram.feature3Title}</h4>
                        <p className="text-xs text-gray-400">{t.telegram.feature3Desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* قسم الإيميل */}
          {selectedMethod === 'email' && (
            <div className="max-w-2xl mx-auto">
              <button
                onClick={() => setSelectedMethod(null)}
                className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                {isRTL ? <ArrowRight className="h-5 w-5" /> : <ArrowLeft className="h-5 w-5" />}
                <span>{t.backToOptions}</span>
              </button>

              <div className="bg-[#1f1237]/80 backdrop-blur-lg rounded-2xl p-8 border border-purple-800/30">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-12 w-12 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{t.email.chatTitle}</h3>
                  <p className="text-gray-400 mb-8">{t.email.chatDescription}</p>
                  
                  <div className="space-y-4">
                    {/* معلومات الإيميل */}
                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-xl p-6 border border-purple-700/30">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <Mail className="h-6 w-6 text-purple-400" />
                        <span className="text-lg font-semibold">teleco7p@gmail.com</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-4">{t.email.availability}</p>
                      <div className="flex items-center justify-center gap-2 text-green-400">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{t.email.responseTime}</span>
                      </div>
                    </div>

                    {/* زر فتح الإيميل */}
                    <a
                      href="mailto:teleco7p@gmail.com?subject=Support Request"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all duration-300"
                    >
                      <Mail className="h-6 w-6" />
                      <span className="text-lg font-semibold">{t.email.openEmail}</span>
                      <ExternalLink className="h-5 w-5" />
                    </a>

                    {/* ميزات التواصل عبر الإيميل */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Clock className="h-6 w-6 text-purple-400" />
                        </div>
                        <h4 className="text-sm font-semibold mb-1">{t.email.feature1Title}</h4>
                        <p className="text-xs text-gray-400">{t.email.feature1Desc}</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <MessageSquare className="h-6 w-6 text-purple-400" />
                        </div>
                        <h4 className="text-sm font-semibold mb-1">{t.email.feature2Title}</h4>
                        <p className="text-xs text-gray-400">{t.email.feature2Desc}</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <CheckCircle className="h-6 w-6 text-purple-400" />
                        </div>
                        <h4 className="text-sm font-semibold mb-1">{t.email.feature3Title}</h4>
                        <p className="text-xs text-gray-400">{t.email.feature3Desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* معلومات الاتصال السفلية */}
       
        </main>
      </div>
    </div>
  )
}