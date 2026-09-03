import { getLocale } from '../runtime.js';

const translations = {"ar":"{days} يومًا","bn":"{days} দিন","de":"{days} Tage","en":"{days} days","es":"{days} días","fr":"{days} jours","hi":"{days} दिन","id":"{days} hari","pt-BR":"{days} dias","ru":"{days} дней","ur":"{days} دن","zh-CN":"{days} 天"};

export function settings_apikeys_expirydays(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
