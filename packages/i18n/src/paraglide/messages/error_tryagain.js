import { getLocale } from '../runtime.js';

const translations = {"ar":"حاول مجددًا","bn":"আবার চেষ্টা করুন","de":"Versuchen Sie es erneut","en":"Try again","es":"Inténtalo de nuevo","fr":"Réessayez","hi":"पुनः प्रयास करें","id":"Coba lagi","pt-BR":"Tente novamente","ru":"Попробуйте еще раз","ur":"دوبارہ کوشش کریں۔","zh-CN":"再试一次"};

export function error_tryagain(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
