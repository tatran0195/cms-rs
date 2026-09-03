import { getLocale } from '../runtime.js';

const translations = {"ar":"إعادة المحاولة","bn":"আবার চেষ্টা করুন","de":"Versuchen Sie es noch einmal","en":"Retry","es":"Reintentar","fr":"Réessayer","hi":"पुनः प्रयास करें","id":"Coba lagi","pt-BR":"Tentar novamente","ru":"Повторить попытку","ur":"دوبارہ کوشش کریں۔","zh-CN":"重试"};

export function common_retry(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
