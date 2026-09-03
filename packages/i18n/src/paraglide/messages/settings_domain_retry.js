import { getLocale } from '../runtime.js';

const translations = {"ar":"إعادة الفحص","bn":"আবার চেক করার চেষ্টা করুন","de":"Versuchen Sie es noch einmal","en":"Retry check","es":"Reintentar verificación","fr":"Réessayez la vérification","hi":"जाँच का पुनः प्रयास करें","id":"Coba periksa lagi","pt-BR":"Tentar verificar novamente","ru":"Повторить проверку","ur":"دوبارہ چیک کرنے کی کوشش کریں۔","zh-CN":"重试检查"};

export function settings_domain_retry(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
