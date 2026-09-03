import { getLocale } from '../runtime.js';

const translations = {"ar":"إلغاء كل الوصول فورًا","bn":"জরুরী সমস্ত অ্যাক্সেস প্রত্যাহার করুন","de":"Im Notfall sämtlichen Zugriff widerrufen","en":"Emergency revoke all access","es":"Revocación de emergencia de todos los accesos","fr":"Révocation d'urgence de tous les accès","hi":"आपात्कालीन स्थिति में सभी पहुंच रद्द करें","id":"Darurat mencabut semua akses","pt-BR":"Emergência revogar todo o acesso","ru":"Экстренный отзыв всего доступа","ur":"ایمرجنسی تمام رسائی کو منسوخ کر دیں۔","zh-CN":"紧急撤销所有访问权限"};

export function settings_authentication_reader_emergencyaction(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
