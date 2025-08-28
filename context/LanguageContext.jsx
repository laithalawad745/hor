// context/LanguageContext.jsx
"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navbar
    navbar: {
      brand: "Telecop",
      contact: "Contact",
      Payment: "Payment",   
      pricing: "Pricing",
      register: "Register",
      signin: "Sign In",
    },
    
    // Hero Section
    hero: {
      welcome: "Welcome To Telecop",
      subtitle: "At Telecop we offer Telegram subscription management service with powerful automation",
      badge: "Trusted by 10,00+ users",
      startFree: "Start Now ",
      learnMore: "Learn More",
      feature1: {
        title: "Lightning Fast",
        description: "Instant setup and response times"
      },
      feature2: {
        title: "Secure & Safe",
        description: "Security of your data"
      },
      feature3: {
        title: "24/7 Support",
        description: "Always here when you need us"
      }
    },
    
    // Info Section
    info: {
      sectionTitle: "Powerful Features",
      sectionSubtitle: "Everything you need to manage your Telegram community effectively",
      groupManagement: {
        title: "Group Management",
        description: "It will automatically identify people in your group and expel them when the subscription ends",
        feature1: "Auto-detection of expired subscriptions",
        feature2: "Instant member removal",
        feature3: "Detailed activity logs"
      },
      completeManagement: {
        title: "Complete Management",
        description: "Our specialized team will receive your entire package and contact the people to confirm payment and everything",
        noteTitle: "Hands-Free Operation",
        note: "That is, it will not require any intervention from you at all"
      },
      additionalFeature1: {
        title: "Bot Automation",
        description: "Advanced bot features for seamless management"
      },
      additionalFeature2: {
        title: "Custom Settings",
        description: "Tailor everything to your specific needs"
      },
      additionalFeature3: {
        title: "Security First",
        description: "End-to-end encryption for all operations"
      }
    },
    // Pricing Section
    pricing: {
      sectionTitle: "Choose Your Plan",
      sectionSubtitle: "Flexible pricing options to suit your needs",
      perMonth: "month",
      basic: {
        title: "Basic",
        subtitle: "Perfect for Big communities",
        price: "$50",
        feature1: "Up to 1000 members",
        feature2: "Advanced bot features",
        feature3: "24/7 Support",
        button: "Get Started"
      },
      premium: {
        title: "Premium",
        subtitle: "medium channels  ",
        popular: "Most Popular",
        price: "$20",
        feature1: "Up to 100 members",
        feature2: "Advanced bot features",
        feature3: "Priority 24/7 Support",
        feature4: "Analytics dashboard",
        button: "Get Started"
      },
      enterprise: {
        title: "Enterprise",
        subtitle: "For large organizations",
        price: "$299",
        feature1: "Unlimited members",
        feature2: "Comprehensive channel management, including payments and additions  ",
        feature3: "Dedicated account manager",
        button: "Get Started"
      }
    },
    // Footer
    footer: {
      description: "We provide innovative  solutions to improve user experience and business development.",
      quickLinks: {
        title: "Quick links",
        home: "Home",
        products: "Products",
        aboutUs: "Who are we"
      },
      services: {
        title: "Our services",
        telegramBots: "Telegram bots",
        telegramManagement: "Telegram management",
        subsetManagement: "Subset management"
      },
      contact: "Contact us",
      copyright: "All rights reserved",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms and Conditions"
    },
    
    // Payment Page
    payment: {
      title: "Complete Your Payment",
      subtitle: "Choose your preferred payment method",
      warning: {
        title: "Important Notice",
        text: "The automatic payment system is currently under development. After completing your payment, please send the payment confirmation via Telegram. Your account will be activated within 10 minutes to 3 hours."
      },
      methods: {
        usdt: { title: "USDT (TRC20)", subtitle: "Stable digital currency" },
        paypal: { title: "PayPal", subtitle: "Secure online payment" }
      },
      details: "Payment details for",
      walletLabel: "Wallet Address (TRC20)",
      paypalLabel: "Send payment to",
      copy: "Copy",
      copied: "Copied",
      qrNote: "Scan the QR code to pay directly",
      payWithPaypal: "Pay with PayPal",
      am : "Secure and Encrypted",
      fast :"Fast Processing",
      cur:"Secure Online Payment",
      buyer:"Buyer Protection",
      inst:"Instant Processing",
    },

    afterPayment: {
      title: "Post-Payment Steps",
      step1Title: "Complete the Payment",
      step1Text: "Send the required amount via your chosen method",
      step2Title: "Keep the Payment Receipt",
      step2Text: "Save a screenshot or transaction ID as proof of payment",
      step3Title: "Contact via Telegram",
      step3Text: "Send payment details along with your account info to",
      step4Title: "Account Activation",
      step4Text: "Your account will be activated within 10 minutes to a maximum of 3 hours",
      contactButton: "Contact us via Telegram",
      responseTime: "Response time: 10 minutes to 3 hours"
    },
    
    // Dashboard Page
    dashboard: {
      // Header
      header: {
        welcome: "Welcome",
        logout: "Logout",
        refresh: "Refresh"
      },
      
      // Sidebar
      sidebar: {
        dashboard: "Dashboard",
        home: "Home",
        subscribers: "Subscribers",
        statistics: "Statistics",
        payments: "Payments",
        messages: "Messages",
        settings: "Settings",
        logout: "Logout"
      },
      
      // Stats Cards
      stats: {
        totalSubscribers: "Total Subscribers",
        subscriber: "subscriber",
        activeSubscribers: "Active Subscribers",
        activeSubscriber: "active subscriber",
        revenue: "Revenue",
        thisMonth: "This month",
        renewalRate: "Renewal Rate",
        all: "All",
        active: "Active"
      },
      
      // Alerts
      alerts: {
        setupRequired: "Setup Required!",
        setupMessage: "You must add your Telegram channel ID before adding subscribers.",
        goToSettings: "Go to Settings"
      },
      
      // Controls
      controls: {
        search: "Search...",
        allSubscribers: "All Subscribers",
        activeOnly: "Active Only",
        expiredOnly: "Expired Only",
        expiringSoon: "Expiring Soon",
        addSubscriber: "Add Subscriber"
      },
      
      // Status
      status: {
        expired: "Expired",
        expiringSoon: "Expiring Soon",
        active: "Active",
        days: "days",
        hours: "hours",
        minutes: "minutes"
      },
      
      // Subscriber Card/Table
      subscriber: {
        status: "Status",
        expiresIn: "Expires in",
        date: "Date",
        telegramId: "Telegram ID",
        timeRemaining: "Time Remaining",
        expiryDate: "Expiry Date",
        actions: "Actions",
        noUsername: "No username",
        extend: "Extend",
        kick: "Kick",
        delete: "Delete"
      },
      
      // Add Subscriber Form
      addForm: {
        title: "Add New Subscriber",
        telegramId: "Telegram ID",
        username: "Username ",
        firstName: "First Name (Optional)",
        lastName: "Last Name (Optional)",
        durationType: "Duration Type",
        duration: "Duration",
        minutes: "Minutes",
        hours: "Hours",
        days: "Days",
        cancel: "Cancel",
        addSubscriber: "Add Subscriber"
      },
      
      // Extend Subscription Modal
      extendModal: {
        title: "Extend Subscription",
        status: "Status:",
        expiresOn: "Expires on:",
        timeRemaining: "Time remaining:",
        durationType: "Duration Type",
        duration: "Duration",
        activeNote: "💡 Subscriber is currently active. Only a confirmation message will be sent.",
        expiredNote: "💡 Subscription has expired. A new invite link will be sent to the subscriber.",
        cancel: "Cancel",
        extendSubscription: "Extend Subscription"
      },
      
      // Toast Messages
      toasts: {
        sessionExpired: "Your session has expired, please login again",
        loadingError: "Failed to load admin data",
        subscribersError: "Failed to load subscribers list",
        updatingData: "Updating data...",
        dataUpdated: "Data updated successfully",
        updateFailed: "Failed to update data",
        loggingOut: "Logging out...",
        loggedOut: "Logged out successfully",
        channelNotSet: "You must set up the channel first!",
        invalidId: "Telegram ID must be a number only!",
        addingSubscriber: "Adding subscriber...",
        subscriberRenewed: "Subscription renewed! Subscriber is already active, confirmation sent.",
        subscriberAdded: "Subscriber added and invite link sent!",
        subscriberAddedNoMessage: "Subscriber added but message sending failed!",
        addFailed: "Failed to add subscriber",
        addError: "Error adding subscriber",
        kickConfirm: "Are you sure you want to kick",
        kickSubMessage: "The subscriber will be removed from the channel",
        kickButton: "Yes, Kick",
        kicking: "Kicking subscriber...",
        kicked: "Subscriber kicked successfully",
        kickFailed: "Failed to kick subscriber",
        extendingSubscription: "Extending subscription...",
        subscriptionExtended: "Subscription extended! Confirmation sent to subscriber.",
        subscriptionRenewed: "Subscription renewed! Invite link sent.",
        extendFailed: "Failed to extend subscription",
        extendError: "Error extending subscription",
        deleteConfirm: "Are you sure you want to permanently delete this subscriber?",
        deleteSubMessage: "This action cannot be undone!",
        deleteButton: "Yes, Delete",
        deleting: "Deleting subscriber...",
        deleted: "Subscriber deleted successfully",
        deleteFailed: "Failed to delete subscriber"
      }
    },
    
    // Settings Page - NEW SECTION
    settings: {
      // Header
      header: {
        title: "Channel Settings",
        backToDashboard: "Back to Dashboard"
      },
      
      // Alerts
      alerts: {
        channelRequired: "Required: Channel ID",
        channelRequiredMessage: "You must add your channel ID to activate the subscription system."
      },
      
      // Form
      form: {
        title: "Channel Information",
        channelId: "Channel ID *",
        channelIdHint: "To get the ID, go to the bot @username_to_id_bot, message it, and select your channel—it will send you the ID",
        channelName: "Channel Name (Optional)",
        channelNamePlaceholder: "Your channel name",
        cancel: "Cancel",
        save: "Save Settings",
        saving: "Saving..."
      },
      
      // Setup Steps
      setup: {
        title: "Important Steps:",
        step1: "Add bot @{botUsername} as admin in your channel",
        step2: {
          title: "Grant the bot the following permissions:",
          addMembers: "Add Members",
          banMembers: "Ban Members",
          manageInvites: "Manage Invite Links"
        },
        step3: "Get the channel ID from @username_to_id_bot",
        step4: "Add the ID here and save"
      },
      
      // Bot Info
      botInfo: {
        title: "Bot Used:",
        description: "This bot manages all channels registered in the system"
      },
      
      // Validation
      validation: {
        channelIdFormat: "Channel ID must start with -100"
      },
      
      // Toast Messages
      toasts: {
        sessionExpired: "Your session has expired, please login again",
        loadingError: "Failed to load settings data",
        saving: "Saving settings...",
        saved: "Settings saved successfully!",
        saveFailed: "Failed to save settings",
        connectionError: "Connection error with server"
      }
    },


    contact: {
      header: {
        title: "Contact Us",
        backToHome: "Back to Home"
      },
      pageTitle: "Get in Touch",
      pageSubtitle: "We're here to help and answer any question you might have",
      backToOptions: "Back to options",
      
      // Telegram Section
      telegram: {
        title: "Chat on Telegram",
        description: "Get instant support through our Telegram channel",
        clickToChat: "Click to start chat",
        chatTitle: "Start a Conversation",
        chatDescription: "Connect with our support team instantly on Telegram",
        availability: "Available 24/7   ",
        responseTime: "Average response time: 5 minutes",
        openTelegram: "Open Telegram Chat",
        feature1Title: "Fast Response",
        feature1Desc: "Get answers within minutes",
        feature2Title: "Live Support",
        feature2Desc: "Chat with real people",
        feature3Title: "Track History",
        feature3Desc: "Keep all conversations"
      },
      
      // Email Section
      email: {
        title: "Send Email",
        description: "Send us a detailed message and we'll get back to you",
        clickToEmail: "Click to send email",
        chatTitle: "Email Us Directly",
        chatDescription: "Send us a detailed message and our team will respond promptly",
        availability: "Professional support for all your inquiries",
        responseTime: "Response time: Within 24 hours",
        openEmail: "Open Email Client",
        feature1Title: "Detailed Support",
        feature1Desc: "Send comprehensive messages",
        feature2Title: "Track Records",
        feature2Desc: "Keep email conversation history",
        feature3Title: "Professional",
        feature3Desc: "Formal communication channel"
      },
      
      // Info Section
      info: {
        address: "Our Office",
        addressDetails: "123 Tech Street, Digital City, DC 12345",
        phone: "Phone",
        hours: "Business Hours",
        hoursDetails: "Mon-Fri: 9AM-6PM EST"
      },
      
      // Toasts
      toasts: {
        messageSent: "Message sent successfully! We'll get back to you soon.",
        messageFailed: "Failed to send message. Please try again."
      }
    }
  },
  
  ar: {
    // Navbar
    navbar: {
      brand: "تيليكوب",
      contact: "اتصل بنا",
      Payment: "الدفع",
      pricing: "الأسعار",
      register: "تسجيل",
      signin: "تسجيل الدخول",
    },
    
    // Hero Section
    hero: {
      welcome: "مرحباً بكم في  تيليكوب",
      subtitle: "في  تيليكوب نقدم خدمة إدارة اشتراكات تيليجرام مع أتمتة قوية",
      badge: "موثوق من أكثر من 10,00 مستخدم",
      startFree: "ابدأ  الان",
      learnMore: "اعرف المزيد",
      feature1: {
        title: "سرعة فائقة",
        description: "إعداد فوري وأوقات استجابة سريعة"
      },
      feature2: {
        title: "آمن ومحمي",
        description: "أمن على بياناتك"
      },
      feature3: {
        title: "دعم 24/7",
        description: "دائماً هنا عندما تحتاجنا"
      }
    },
    // Info Section
 info: {
      sectionTitle: "مميزات قوية",
      sectionSubtitle: "كل ما تحتاجه لإدارة مجتمع تيليجرام الخاص بك بفعالية",
      groupManagement: {
        title: "إدارة المجموعات",
        description: "سيقوم تلقائياً بتحديد الأشخاص في مجموعتك وطردهم عند انتهاء الاشتراك",
        feature1: "الكشف التلقائي عن الاشتراكات المنتهية",
        feature2: "إزالة فورية للأعضاء",
        feature3: "سجلات نشاط مفصلة"
      },
      completeManagement: {
        title: "إدارة كاملة",
        description: "سيستلم فريقنا المتخصص حزمتك بالكامل ويتواصل مع الأشخاص لتأكيد الدفع وكل شيء",
        noteTitle: "تشغيل بدون تدخل",
        note: "أي أنه لن يتطلب أي تدخل منك على الإطلاق"
      },
      additionalFeature1: {
        title: "أتمتة البوت",
        description: "ميزات بوت متقدمة لإدارة سلسة"
      },
      additionalFeature2: {
        title: "إعدادات مخصصة",
        description: "خصص كل شيء حسب احتياجاتك الخاصة"
      },
      additionalFeature3: {
        title: "الأمان أولاً",
        description: "تشفير من طرف إلى طرف لجميع العمليات"
      }
    },
    
    // Pricing Section
  pricing: {
      sectionTitle: "اختر خطتك",
      sectionSubtitle: "خيارات أسعار مرنة تناسب احتياجاتك",
      perMonth: "شهر",
      basic: {
        title: "الأساسية",
        subtitle: "مثالية للمجتمعات الكبيرة",
        price: "$50",
        feature1: "حتى 1000 عضو",
        feature2: "ميزات البوت المتقدمة",
        feature3: "دعم 24/7",
        button: "ابدأ الآن"
      },
      premium: {
        title: "المميزة",
        subtitle: " القنوات المتوسطة",
        popular: "الأكثر شعبية",
        price: "$20",
        feature1: "حتى 100 عضو",
        feature2: "ميزات البوت المتقدمة",
        feature3: "دعم أولوية 24/7",
        feature4: "لوحة تحليلات",
        button: "ابدأ الآن"
      },
      enterprise: {
        title: "المؤسسية",
        subtitle: "للمنظمات الكبيرة",
        price: "$299",
        feature1: "أعضاء غير محدودين",
        feature2: "إدارة شاملة للقنوات، بما في ذلك عمليات الدفع والإضافة",
        feature3: "مدير حساب مخصص",
        button: "ابدأ الآن"
      }
    },
    
    // Footer
    footer: {
      description: "نقدم حلول   المبتكرة لتحسين تجربة المستخدم وتطوير الأعمال.",
      quickLinks: {
        title: "روابط سريعة",
        home: "الرئيسية",
        products: "المنتجات",
        aboutUs: "من نحن"
      },
      services: {
        title: "خدماتنا",
        telegramBots: "بوتات تيليجرام",
        telegramManagement: "إدارة تيليجرام",
        subsetManagement: "إدارة الاشتراكات"
      },
      contact: "اتصل بنا",
      copyright: "جميع الحقوق محفوظة",
      privacyPolicy: "سياسة الخصوصية",
      termsConditions: "الشروط والأحكام"
    },
    
    // Payment Page
    payment: {
      title: "إتمام عملية الدفع",
      subtitle: "اختر طريقة الدفع المناسبة لك",
      warning: {
        title: "تنبيه مهم",
        text: "نظام الدفع الآلي قيد التطوير حالياً. بعد إتمام الدفع، يرجى إرسال إشعار الدفع عبر التلغرام وسيتم تفعيل حسابك خلال 10 دقائق إلى 3 ساعات كحد أقصى."
      },
      methods: {
        usdt: { title: "USDT (TRC20)", subtitle: "عملة رقمية مستقرة" },
        paypal: { title: "PayPal", subtitle: "دفع إلكتروني آمن" },
      },
      details: "تفاصيل الدفع بـ",
      walletLabel: "عنوان المحفظة (TRC20)",
      paypalLabel: "أرسل الدفعة إلى",
      copy: "نسخ",
      copied: "تم النسخ",
      qrNote: "امسح الكود للدفع مباشرة",
      payWithPaypal: "الدفع عبر PayPal",
      am : "آمن ومشفر",
      fast :"معالجة سريعة",
      cur:"دفع إلكتروني آمن",
      buyer:"حماية المشتري",
      inst:"معالجة فورية",
    },

    afterPayment: {
      title: "خطوات ما بعد الدفع",
      step1Title: "أكمل عملية الدفع",
      step1Text: "قم بإرسال المبلغ المطلوب عبر الوسيلة التي اخترتها",
      step2Title: "احتفظ بإيصال الدفع",
      step2Text: "احتفظ بلقطة شاشة أو رقم المعاملة كدليل للدفع",
      step3Title: "تواصل عبر التلغرام",
      step3Text: "أرسل تفاصيل الدفع مع معلومات حسابك إلى",
      step4Title: "تفعيل الحساب",
      step4Text: "سيتم تفعيل حسابك خلال 10 دقائق إلى 3 ساعات كحد أقصى",
      contactButton: "تواصل معنا عبر التلغرام",
      responseTime: "وقت الرد: من 10 دقائق إلى 3 ساعات"
    },
    
    // Dashboard Page
    dashboard: {
      // Header
      header: {
        welcome: "مرحباً",
        logout: "تسجيل الخروج",
        refresh: "تحديث"
      },
      
      // Sidebar
      sidebar: {
        dashboard: "لوحة التحكم",
        home: "الرئيسية",
        subscribers: "المشتركون",
        statistics: "الإحصائيات",
        payments: "المدفوعات",
        messages: "الرسائل",
        settings: "الإعدادات",
        logout: "تسجيل الخروج"
      },
      
      // Stats Cards
      stats: {
        totalSubscribers: "إجمالي المشتركين",
        subscriber: "مشترك",
        activeSubscribers: "المشتركون النشطون",
        activeSubscriber: "مشترك نشط",
        revenue: "الإيرادات",
        thisMonth: "هذا الشهر",
        renewalRate: "معدل التجديد",
        all: "الكل",
        active: "نشط"
      },
      
      // Alerts
      alerts: {
        setupRequired: "إعداد مطلوب!",
        setupMessage: "يجب إضافة معرف قناتك في التلغرام قبل إضافة المشتركين.",
        goToSettings: "اذهب إلى الإعدادات"
      },
      
      // Controls
      controls: {
        search: "بحث...",
        allSubscribers: "جميع المشتركين",
        activeOnly: "النشطون فقط",
        expiredOnly: "المنتهية فقط",
        expiringSoon: "ينتهي قريباً",
        addSubscriber: "إضافة مشترك"
      },
      
      // Status
      status: {
        expired: "منتهي",
        expiringSoon: "ينتهي قريباً",
        active: "نشط",
        days: "يوم",
        hours: "ساعة",
        minutes: "دقيقة"
      },
      
      // Subscriber Card/Table
      subscriber: {
        status: "الحالة",
        expiresIn: "ينتهي في",
        date: "التاريخ",
        telegramId: "معرف التلغرام",
        timeRemaining: "الوقت المتبقي",
        expiryDate: "تاريخ الانتهاء",
        actions: "الإجراءات",
        noUsername: "بدون اسم مستخدم",
        extend: "تمديد",
        kick: "طرد",
        delete: "حذف"
      },
      
      // Add Subscriber Form
      addForm: {
        title: "إضافة مشترك جديد",
        telegramId: "معرف التلغرام (ID) *",
        username: "اسم المستخدم",
        firstName: " الاسم الأول (اختياري)",
        lastName: "الاسم الأخير (اختياري)",
        durationType: "نوع المدة",
        duration: "المدة",
        minutes: "دقائق",
        hours: "ساعات",
        days: "أيام",
        cancel: "إلغاء",
        addSubscriber: "إضافة المشترك"
      },
      
      // Extend Subscription Modal
      extendModal: {
        title: "تمديد اشتراك",
        status: "الحالة:",
        expiresOn: "ينتهي في:",
        timeRemaining: "الوقت المتبقي:",
        durationType: "نوع المدة",
        duration: "المدة",
        activeNote: "💡 المشترك نشط حالياً. سيتم إرسال رسالة تأكيد بالتمديد فقط.",
        expiredNote: "💡 الاشتراك منتهي. سيتم إرسال رابط انضمام جديد للمشترك.",
        cancel: "إلغاء",
        extendSubscription: "تمديد الاشتراك"
      },
      
      // Toast Messages
      toasts: {
        sessionExpired: "انتهت جلستك، يرجى تسجيل الدخول مرة أخرى",
        loadingError: "فشل في تحميل بيانات المسؤول",
        subscribersError: "فشل في تحميل قائمة المشتركين",
        updatingData: "جاري تحديث البيانات...",
        dataUpdated: "تم تحديث البيانات",
        updateFailed: "فشل تحديث البيانات",
        loggingOut: "جاري تسجيل الخروج...",
        loggedOut: "تم تسجيل الخروج بنجاح",
        channelNotSet: "يجب إعداد القناة أولاً!",
        invalidId: "معرف التلغرام يجب أن يكون رقماً فقط!",
        addingSubscriber: "جاري إضافة المشترك...",
        subscriberRenewed: "تم تجديد الاشتراك! المشترك نشط بالفعل، تم إرسال تأكيد.",
        subscriberAdded: "تم إضافة المشترك وإرسال رابط الانضمام!",
        subscriberAddedNoMessage: "تم إضافة المشترك لكن فشل إرسال الرسالة!",
        addFailed: "فشل في إضافة المشترك",
        addError: "حدث خطأ في إضافة المشترك",
        kickConfirm: "هل أنت متأكد من طرد",
        kickSubMessage: "سيتم إزالة المشترك من القناة",
        kickButton: "نعم، اطرد",
        kicking: "جاري طرد المشترك...",
        kicked: "تم طرد المشترك بنجاح",
        kickFailed: "فشل في طرد المشترك",
        extendingSubscription: "جاري تمديد الاشتراك...",
        subscriptionExtended: "تم تمديد الاشتراك! تم إرسال تأكيد للمشترك.",
        subscriptionRenewed: "تم تجديد الاشتراك! تم إرسال رابط الانضمام.",
        extendFailed: "فشل في تمديد الاشتراك",
        extendError: "حدث خطأ في تمديد الاشتراك",
        deleteConfirm: "هل أنت متأكد من حذف هذا المشترك نهائياً؟",
        deleteSubMessage: "هذا الإجراء لا يمكن التراجع عنه!",
        deleteButton: "نعم، احذف",
        deleting: "جاري حذف المشترك...",
        deleted: "تم حذف المشترك بنجاح",
        deleteFailed: "فشل في حذف المشترك"
      }
    },
    
    // Settings Page - NEW SECTION
    settings: {
      // Header
      header: {
        title: "إعدادات القناة",
        backToDashboard: "العودة للوحة التحكم"
      },
      
      // Alerts
      alerts: {
        channelRequired: "مطلوب: معرف القناة",
        channelRequiredMessage: "يجب إضافة معرف قناتك لتفعيل نظام الاشتراكات."
      },
      
      // Form
      form: {
        title: "معلومات القناة",
        channelId: "معرف القناة (Channel ID) *",
        channelIdHint: "للحصول على ID اذهب الى بوت @username_to_id_bot و قم بمراسلته و اختيار القناة سوف يقوم ب ارسال ID",
        channelName: "اسم القناة (اختياري)",
        channelNamePlaceholder: "اسم قناتك",
        cancel: "إلغاء",
        save: "حفظ الإعدادات",
        saving: "جاري الحفظ..."
      },
      
      // Setup Steps
      setup: {
        title: "خطوات مهمة:",
        step1: "أضف البوت @{botUsername} كمشرف في قناتك",
        step2: {
          title: "امنح البوت الصلاحيات التالية:",
          addMembers: "إضافة أعضاء",
          banMembers: "حظر الأعضاء",
          manageInvites: "إدارة روابط الدعوة"
        },
        step3: "احصل على معرف القناة من @username_to_id_bot",
        step4: "أضف المعرف هنا واحفظ"
      },
      
      // Bot Info
      botInfo: {
        title: "البوت المستخدم:",
        description: "هذا البوت يدير جميع القنوات المسجلة في النظام"
      },
      
      // Validation
      validation: {
        channelIdFormat: "معرف القناة يجب أن يبدأ بـ -100"
      },
      
      // Toast Messages
      toasts: {
        sessionExpired: "انتهت جلستك، يرجى تسجيل الدخول مرة أخرى",
        loadingError: "فشل في تحميل بيانات الإعدادات",
        saving: "جاري حفظ الإعدادات...",
        saved: "تم حفظ الإعدادات بنجاح!",
        saveFailed: "فشل في حفظ الإعدادات",
        connectionError: "خطأ في الاتصال بالخادم"
      }
    },
    contact: {
      header: {
        title: "تواصل معنا",
        backToHome: "العودة للرئيسية"
      },
      pageTitle: "تواصل معنا",
      pageSubtitle: "نحن هنا للمساعدة والإجابة على أي سؤال قد يكون لديك",
      backToOptions: "العودة للخيارات",
      
      telegram: {
        title: "الدردشة عبر تيليجرام",
        description: "احصل على دعم فوري من خلال قناتنا على تيليجرام",
        clickToChat: "انقر لبدء المحادثة",
        chatTitle: "ابدأ محادثة",
        chatDescription: "تواصل مع فريق الدعم لدينا فوراً على تيليجرام",
        availability: "متاح 24/7 ",
        responseTime: "متوسط وقت الاستجابة: 5 دقائق",
        openTelegram: "فتح محادثة تيليجرام",
        feature1Title: "استجابة سريعة",
        feature1Desc: "احصل على إجابات خلال دقائق",
        feature2Title: "دعم مباشر",
        feature2Desc: "تحدث مع أشخاص حقيقيين",
        feature3Title: "تتبع المحادثات",
        feature3Desc: "احتفظ بجميع المحادثات"
      },
      
      // Email Section
     email: {
        title: "إرسال بريد إلكتروني",
        description: "أرسل لنا رسالة مفصلة وسنعود إليك",
        clickToEmail: "انقر لإرسال بريد إلكتروني",
        chatTitle: "راسلنا عبر البريد الإلكتروني",
        chatDescription: "أرسل لنا رسالة مفصلة وسيرد فريقنا عليك بسرعة",
        availability: "دعم احترافي لجميع استفساراتك",
        responseTime: "وقت الاستجابة: خلال 24 ساعة",
        openEmail: "فتح البريد الإلكتروني",
        feature1Title: "دعم مفصل",
        feature1Desc: "إرسال رسائل شاملة",
        feature2Title: "تتبع السجلات",
        feature2Desc: "الاحتفاظ بسجل المراسلات",
        feature3Title: "احترافي",
        feature3Desc: "قناة تواصل رسمية"
      },
      
      // Info Section
      info: {
        address: "مكتبنا",
        addressDetails: "123 شارع التقنية، المدينة الرقمية، 12345",
        phone: "الهاتف",
        hours: "ساعات العمل",
        hoursDetails: "الإثنين-الجمعة: 9 صباحاً - 6 مساءً"
      },
      
      // Toasts
      toasts: {
        messageSent: "تم إرسال الرسالة بنجاح! سنعود إليك قريباً.",
        messageFailed: "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى."
      }
    }
  
  }
};

// Export the translations for separate settings file if needed
export const settingsTranslations = {
  en: translations.en.settings,
  ar: translations.ar.settings
};

// Export the dashboard translations for separate dashboard file if needed
export const dashboardTranslations = {
  en: translations.en.dashboard,
  ar: translations.ar.dashboard
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLanguage);
    setIsRTL(savedLanguage === 'ar');
    
    // Set document direction
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = savedLanguage;
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    setIsRTL(newLanguage === 'ar');
    
    // Save preference
    localStorage.setItem('preferredLanguage', newLanguage);
    
    // Update document direction
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  // if (!context) {
  //   throw new Error('useLanguage must be used within a LanguageProvider');
  // }
  return context;
};