import { getLocale } from '../runtime.js';

const translations = {"ar":"لا يحصل القرّاء على لوحة التحكم أو مقاعد المؤلفين. الدعوات لمرة واحدة وتنتهي بعد سبعة أيام.","bn":"পাঠকরা ড্যাশবোর্ড অ্যাক্সেস বা লেখক আসন পাবেন না। আমন্ত্রণগুলি এককভাবে ব্যবহার করা হয় এবং সাত দিন পরে মেয়াদ শেষ হয়৷","de":"Leser erhalten keinen Dashboard-Zugriff oder Autorensitze. Einladungen sind nur für den einmaligen Gebrauch bestimmt und verfallen nach sieben Tagen.","en":"Readers do not receive dashboard access or author seats. Invitations are single-use and expire after seven days.","es":"Los lectores no reciben acceso al panel ni puestos de autor. Las invitaciones son de un solo uso y caducan a los siete días.","fr":"Les lecteurs ne reçoivent pas d’accès au tableau de bord ni de sièges d’auteur. Les invitations sont à usage unique et expirent au bout de sept jours.","hi":"पाठकों को डैशबोर्ड एक्सेस या लेखक सीटें नहीं मिलती हैं। निमंत्रण एकल-उपयोग हैं और सात दिनों के बाद समाप्त हो जाते हैं।","id":"Pembaca tidak menerima akses dashboard atau kursi penulis. Undangan hanya sekali pakai dan habis masa berlakunya setelah tujuh hari.","pt-BR":"Os leitores não recebem acesso ao painel ou licenças de autor. Os convites são descartáveis ​​e expiram após sete dias.","ru":"Читатели не получают доступа к панели управления или авторских мест. Приглашения являются одноразовыми и истекают через семь дней.","ur":"قارئین کو ڈیش بورڈ تک رسائی یا مصنف کی نشستیں نہیں ملتی ہیں۔ دعوت نامے واحد استعمال ہوتے ہیں اور سات دن کے بعد ختم ہو جاتے ہیں۔","zh-CN":"读者不会获得仪表板访问权限或作者席位。邀请函是一次性的，并且会在 7 天后过期。"};

export function settings_authentication_reader_readersdescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
