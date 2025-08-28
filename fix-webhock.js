const https = require('https');

const BOT_TOKEN = '8394267827:AAFu-suFMEJ3XiTU-Bmm86MnD_qGSGgkxBY';
const WEBHOOK_URL = 'https://telegramcopilot-cv.vercel.app/api/bot/webhook';

const data = JSON.stringify({
    url: WEBHOOK_URL,
    drop_pending_updates: true,
    allowed_updates: [
        'message',
        'callback_query',
        'chat_join_request',
        'chat_member',
        'my_chat_member'
    ]
});

const options = {
    hostname: 'api.telegram.org',
    port: 443,
    path: `/bot${BOT_TOKEN}/setWebhook`,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};



const req = https.request(options, (res) => {
    let result = '';

    res.on('data', (chunk) => {
        result += chunk;
    });

    res.on('end', () => {
        const response = JSON.parse(result);
        if (response.ok) {
            console.log('✅ Webhook تم إعداده بنجاح!');
            console.log('🔗 URL:', WEBHOOK_URL);

            // التحقق من المعلومات
            https.get(`https://api.telegram.org/bot${BOT_TOKEN}/getWebhookInfo`, (res2) => {
                let info = '';
                res2.on('data', (chunk) => info += chunk);
                res2.on('end', () => {
                    const webhookInfo = JSON.parse(info);
                    console.log('\n📊 معلومات Webhook:');
                    console.log(webhookInfo.result);
                });
            });
        } else {
            console.log('❌ خطأ:', response);
        }
    });
});

req.on('error', (error) => {
    console.error('❌ Error:', error);
});



req.write(data);






req.end();