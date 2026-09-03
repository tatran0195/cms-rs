import { getLocale } from '../runtime.js';

const translations = {"ar":"موعد الانتهاء التالي","bn":"Next Expiry","de":"Next Expiry","en":"Next Expiry","es":"Next Expiry","fr":"Next Expiry","hi":"Next Expiry","id":"Next Expiry","pt-BR":"Next Expiry","ru":"Next Expiry","ur":"Next Expiry","zh-CN":"Next Expiry"};

export function admin_user_nextexpiry(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
