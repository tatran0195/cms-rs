import { getLocale } from '../runtime.js';

const translations = {"ar":"تم إلغاء كل جلسات القرّاء وتعطيل تسليم JWT.","bn":"সমস্ত পাঠক সেশন প্রত্যাহার করা হয়েছে এবং JWT হ্যান্ডঅফ অক্ষম করা হয়েছে৷","de":"Alle Lesersitzungen wurden widerrufen und die JWT-Übergabe deaktiviert.","en":"All reader sessions revoked and JWT handoff disabled.","es":"Todas las sesiones de lector se revocaron y la transferencia JWT se deshabilitó.","fr":"Toutes les sessions de lecteur révoquées et le transfert JWT désactivé.","hi":"सभी रीडर सत्र निरस्त कर दिए गए और JWT हैंडऑफ़ अक्षम कर दिया गया।","id":"Semua sesi pembaca dicabut dan handoff JWT dinonaktifkan.","pt-BR":"Todas as sessões do leitor foram revogadas e a transferência de JWT foi desativada.","ru":"Все сеансы чтения отменены, а передача обслуживания JWT отключена.","ur":"تمام ریڈر سیشنز منسوخ کر دیے گئے اور JWT ہینڈ آف کو غیر فعال کر دیا گیا۔","zh-CN":"所有读者会话均已撤销，并且 JWT 切换已禁用。"};

export function settings_authentication_reader_emergencysuccess(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
