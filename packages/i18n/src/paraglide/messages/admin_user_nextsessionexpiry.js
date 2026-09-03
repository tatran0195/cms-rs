import { getLocale } from '../runtime.js';

const translations = {"ar":"انتهاء الجلسة التالية","bn":"Next Session Expiry","de":"Next Session Expiry","en":"Next Session Expiry","es":"Next Session Expiry","fr":"Next Session Expiry","hi":"Next Session Expiry","id":"Next Session Expiry","pt-BR":"Next Session Expiry","ru":"Next Session Expiry","ur":"Next Session Expiry","zh-CN":"Next Session Expiry"};

export function admin_user_nextsessionexpiry(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
