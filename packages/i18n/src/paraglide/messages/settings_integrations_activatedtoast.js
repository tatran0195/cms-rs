import { getLocale } from '../runtime.js';

const translations = {"ar":"تم تفعيل التكامل","bn":"ইন্টিগ্রেশন সক্রিয় করা হয়েছে","de":"Integration aktiviert","en":"Integration activated","es":"Integración activada","fr":"Intégration activée","hi":"एकीकरण सक्रिय","id":"Integrasi diaktifkan","pt-BR":"Integração ativada","ru":"Активируется интеграция","ur":"انضمام فعال ہو گیا","zh-CN":"启动整合"};

export function settings_integrations_activatedtoast(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
