// app/api/cron/cleanup/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { initializeUnifiedBot } from '@/lib/telegram-bot-manager'

export async function GET(request: NextRequest) {
  try {
    // ✅ التحقق من Authorization (اختياري لكن مهم للأمان)
    const authHeader = request.headers.get('authorization')
    const cronSecret = process.env.CRON_SECRET
    
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // ✅ تهيئة البوت
    const botManager = initializeUnifiedBot(true)
    
    if (!botManager) {
      return NextResponse.json({ error: 'Bot not initialized' }, { status: 500 })
    }

    // ✅ إعادة تحميل القنوات
    await botManager.reloadChannelMappings()
    
    // ✅ طرد المشتركين المنتهية اشتراكاتهم
    await botManager.kickExpiredSubscribers()

    return NextResponse.json({ 
      success: true,
      message: 'Cleanup completed',
      timestamp: new Date().toISOString()
    })
  } catch (error: any) {
    console.error('❌ Cron cleanup error:', error)
    return NextResponse.json({ 
      error: error.message || 'Internal server error' 
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  return GET(request)
}