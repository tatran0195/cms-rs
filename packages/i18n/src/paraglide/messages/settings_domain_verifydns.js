import { getLocale } from '../runtime.js';

const translations = {"ar":"التحقق من DNS","bn":"DNS যাচাই করুন","de":"DNS überprüfen","en":"Verify DNS","es":"Verificar DNS","fr":"Vérifier le DNS","hi":"डीएनएस सत्यापित करें","id":"Verifikasi DNS","pt-BR":"Verifique o DNS","ru":"Проверьте DNS","ur":"DNS کی تصدیق کریں۔","zh-CN":"验证 DNS"};

export function settings_domain_verifydns(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
