const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('🤖 BOT WA AKTIF 24 JAM TANPA VPS');
});

client.on('message', msg => {
    const text = msg.body.toLowerCase();

    if (text === 'menu') {
        msg.reply(
`🤖 MENU BOT
1️⃣ Kuis SD
2️⃣ Info Sekolah
3️⃣ CS / Admin`
        );
    }

    else if (text === '1') {
        msg.reply('✏️ Soal: Rukun Islam ada berapa?');
    }

    else if (text === '5') {
        msg.reply('✅ Benar! Nilai kamu 100');
    }

    else if (text === '2') {
        msg.reply('🏫 Sekolah aktif Senin–Jumat');
    }

    else if (text.includes('harga')) {
        msg.reply('💰 Harga mulai 10.000');
    }
});

client.initialize();