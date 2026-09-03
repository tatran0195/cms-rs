import { getLocale } from '../runtime.js';

const translations = {"ar":"تم التحقق","bn":"যাচাই করা হয়েছে","de":"Verifiziert","en":"Verified","es":"Verificado","fr":"Vérifié","hi":"सत्यापित","id":"Terverifikasi","pt-BR":"Verificado","ru":"Проверено","ur":"تصدیق شدہ","zh-CN":"已验证"};

export function settings_domain_toast_verified(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
