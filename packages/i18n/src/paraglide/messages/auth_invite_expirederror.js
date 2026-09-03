import { getLocale } from '../runtime.js';

const translations = {"ar":"انتهت صلاحية هذه الدعوة. اطلب من الداعي إرسال دعوة جديدة.","bn":"এই আমন্ত্রণের মেয়াদ শেষ হয়ে গেছে। আমন্ত্রণকারীকে একটি নতুন পাঠাতে বলুন।","de":"Diese Einladung ist abgelaufen. Bitten Sie den Einladenden, ein neues zu senden.","en":"This invitation has expired. Ask the inviter to send a new one.","es":"Esta invitación ha caducado. Pídale al invitado que envíe uno nuevo.","fr":"Cette invitation a expiré. Demandez à l'invitant d'en envoyer un nouveau.","hi":"यह आमंत्रण समाप्त हो गया है. आमंत्रितकर्ता से एक नया भेजने के लिए कहें।","id":"Undangan ini telah kedaluwarsa. Minta pengundang untuk mengirimkan yang baru.","pt-BR":"Este convite expirou. Peça ao autor do convite para enviar um novo.","ru":"Срок действия этого приглашения истек. Попросите приглашающего прислать новое.","ur":"اس دعوت کی میعاد ختم ہو چکی ہے۔ مدعو کرنے والے سے ایک نیا بھیجنے کو کہیں۔","zh-CN":"此邀请已过期。请邀请者发送一份新的。"};

export function auth_invite_expirederror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
