const util = require('util');

let handler = async (m, { conn }) => {
    if (!m.quoted) {
        throw 'Perintah ini harus digunakan dengan me-reply sebuah pesan.';
    }

    try {
        const inspectedObject = util.inspect(m.quoted, { showHidden: false, depth: 5, colors: false });

        let replyText = `*Inspecting "m.quoted" Object:*\n\n\`\`\`\n${inspectedObject}\n\`\`\``;
        
        console.log("===== Hasil Inspect m.quoted =====");
        console.log(inspectedObject);
        console.log("===================================");

        await m.reply(replyText);

    } catch (e) {
        console.error(e);
        m.reply('Gagal menginspeksi objek: ' + e.message);
    }
};

handler.help = ['inspect'];
handler.tags = ['owner'];
handler.command = /^(inspect|cekdata|checkdata)$/i;
handler.owner = true; 

module.exports = handler;