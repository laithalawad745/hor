// setup-webhook.js
// سكريبت لإعداد Webhook لبوت Telegram

const BOT_TOKEN = '8394267827:AAFu-suFMEJ3XiTU-Bmm86MnD_qGSGgkxBY'
const WEBHOOK_URL = 'https://your-app-name.vercel.app/api/bot/webhook' // غير هذا لرابط تطبيقك

async function setupWebhook() {
  try {
    console.log('🔧 Setting up webhook...')
    console.log('📍 Webhook URL:', WEBHOOK_URL)
    
    // حذف webhook قديم إن وجد
    const deleteResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/deleteWebhook`
    )
    const deleteResult = await deleteResponse.json()
    console.log('🗑️ Delete old webhook:', deleteResult.ok ? 'Success' : 'Failed')
    
    // إعداد webhook جديد
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/setWebhook`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: WEBHOOK_URL,
          allowed_updates: [
            'message',
            'callback_query',
            'chat_join_request',
            'chat_member',
            'my_chat_member'
          ],
          drop_pending_updates: true // تجاهل التحديثات القديمة
        })
      }
    )
    
    const result = await response.json()
    
    if (result.ok) {
      console.log('✅ Webhook setup successful!')
      
      // الحصول على معلومات الـ webhook
      const infoResponse = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/getWebhookInfo`
      )
      const info = await infoResponse.json()
      
      console.log('\n📊 Webhook Info:')
      console.log('- URL:', info.result.url)
      console.log('- Pending updates:', info.result.pending_update_count)
      console.log('- Last error:', info.result.last_error_message || 'None')
      
    } else {
      console.error('❌ Failed to setup webhook:', result)
    }
    
  } catch (error) {
    console.error('❌ Error:', error)
  }
}

// تشغيل السكريبت
setupWebhook()