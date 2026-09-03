import { getLocale } from '../runtime.js';

const translations = {"ar":"تم نسخ رابط الدعوة إلى الحافظة","bn":"আমন্ত্রণ লিঙ্ক ক্লিপবোর্ডে অনুলিপি করা হয়েছে","de":"Einladungslink in Zwischenablage kopiert","en":"Invite link copied to clipboard","es":"Enlace de invitación copiado al portapapeles","fr":"Lien d'invitation copié dans le presse-papiers","hi":"आमंत्रण लिंक को क्लिपबोर्ड पर कॉपी किया गया","id":"Tautan undangan disalin ke papan klip","pt-BR":"Link de convite copiado para a área de transferência","ru":"Ссылка для приглашения скопирована в буфер обмена.","ur":"دعوت دینے کا لنک کلپ بورڈ پر کاپی ہو گیا۔","zh-CN":"邀请链接已复制到剪贴板"};

export function settings_members_linkcopied(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
