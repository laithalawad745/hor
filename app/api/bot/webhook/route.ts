// app/api/bot/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { initializeUnifiedBot } from '@/lib/telegram-bot-manager'

export async function POST(request: NextRequest) {
  try {
    const update = await request.json()
    console.log('📨 Webhook update received')

    // ✅ تهيئة البوت في وضع Webhook
    const botManager = initializeUnifiedBot(true)
    
    if (!botManager || !botManager.bot) {
      console.error('❌ Bot not initialized')
      return NextResponse.json({ error: 'Bot not initialized' }, { status: 500 })
    }

    // ✅ معالجة التحديث
    await botManager.handleWebhookUpdate(update)

    return NextResponse.json({ ok: true })
  } catch (error: any) {
    console.error('❌ Webhook error:', error)
    return NextResponse.json({ 
      error: error.message || 'Internal server error' 
    }, { status: 500 })
  }
}

// ✅ Endpoint لإعداد الـ Webhook
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    
    if (action === 'setup') {
      // إعداد الـ webhook
      const botToken = process.env.TELEGRAM_BOT_TOKEN
      const webhookUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'https://your-app.vercel.app'}/api/bot/webhook`
      
      if (!botToken || botToken === 'YOUR_BOT_TOKEN_HERE') {
        return NextResponse.json({ 
          error: 'Bot token not configured' 
        }, { status: 400 })
      }

      // إعداد webhook عبر Telegram API
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/setWebhook`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            url: webhookUrl,
            allowed_updates: [
              'message',
              'callback_query',
              'chat_join_request',
              'chat_member',
              'my_chat_member'
            ]
          })
        }
      )

      const result = await response.json()
      
      if (!result.ok) {
        return NextResponse.json({ 
          error: 'Failed to setup webhook',
          details: result
        }, { status: 500 })
      }

      return NextResponse.json({ 
        message: 'Webhook setup successful',
        url: webhookUrl,
        result
      })
    }

    // معلومات الـ webhook الحالية
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    if (!botToken || botToken === 'YOUR_BOT_TOKEN_HERE') {
      return NextResponse.json({ 
        error: 'Bot token not configured' 
      }, { status: 400 })
    }

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/getWebhookInfo`
    )
    const info = await response.json()

    return NextResponse.json({ 
      message: 'Webhook endpoint',
      timestamp: new Date().toISOString(),
      status: 'active',
      webhookInfo: info.result
    })
  } catch (error: any) {
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 })
  }
}