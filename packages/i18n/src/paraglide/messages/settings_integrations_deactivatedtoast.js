import { getLocale } from '../runtime.js';

const translations = {"ar":"تم إيقاف التكامل","bn":"ইন্টিগ্রেশন নিষ্ক্রিয় করা হয়েছে","de":"Integration deaktiviert","en":"Integration deactivated","es":"Integración desactivada","fr":"Désactivation de l'intégration","hi":"एकीकरण निष्क्रिय","id":"Integrasi dinonaktifkan","pt-BR":"Integração desactivada","ru":"Интеграция деактивирована","ur":"انضمام غیر فعال ہو گیا","zh-CN":"整合已失效"};

export function settings_integrations_deactivatedtoast(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
