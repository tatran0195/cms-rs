import { getLocale } from '../runtime.js';

const translations = {"ar":"شارك هذا الرابط لدعوتهم. وإذا كان البريد مُهيّأً، فقد أُرسل تلقائيًا أيضًا.","bn":"তাদের আমন্ত্রণ জানাতে এই লিঙ্কটি শেয়ার করুন। ইমেল কনফিগার করা হলে, এটি স্বয়ংক্রিয়ভাবে পাঠানো হয়েছিল।","de":"Teilen Sie diesen Link, um sie einzuladen. Wenn E-Mail konfiguriert ist, wurde diese auch automatisch versendet.","en":"Share this link to invite them. If email is configured, it was also sent automatically.","es":"Comparte este enlace para invitarlos. Si el correo electrónico está configurado, también se envió automáticamente.","fr":"Partagez ce lien pour les inviter. Si l'e-mail est configuré, il a également été envoyé automatiquement.","hi":"उन्हें आमंत्रित करने के लिए इस लिंक को साझा करें। यदि ईमेल कॉन्फ़िगर किया गया है, तो यह स्वचालित रूप से भी भेजा गया था।","id":"Bagikan tautan ini untuk mengundang mereka. Jika email dikonfigurasi, email juga dikirim secara otomatis.","pt-BR":"Compartilhe este link para convidá-los. Se o e-mail estiver configurado, ele também será enviado automaticamente.","ru":"Поделитесь этой ссылкой, чтобы пригласить их. Если настроена электронная почта, она также будет отправлена ​​автоматически.","ur":"ان کو مدعو کرنے کے لیے اس لنک کو شیئر کریں۔ اگر ای میل ترتیب دی گئی ہے، تو یہ خود بخود بھیجا گیا تھا۔","zh-CN":"分享此链接以邀请他们。如果配置了电子邮件，也会自动发送。"};

export function settings_members_invitelinkhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
