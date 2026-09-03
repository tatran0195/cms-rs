import { getLocale } from '../runtime.js';

const translations = {"ar":"تم التحقق من التكامل","bn":"ইন্টিগ্রেশন যাচাই করা হয়েছে","de":"Integration verifiziert","en":"Integration verified","es":"Integración verificada","fr":"Intégration vérifiée","hi":"एकीकरण सत्यापित","id":"Integrasi diverifikasi","pt-BR":"Integração verificada","ru":"Проверка интеграции","ur":"انضمام کی توثیق ہو گئی","zh-CN":"整合核实"};

export function settings_integrations_verifiedtoast(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
