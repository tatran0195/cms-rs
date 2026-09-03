import { getLocale } from '../runtime.js';

const translations = {"ar":"أرسلنا رمزًا لمرة واحدة إلى {email}.","bn":"We sent a one-time code to {email}.","de":"We sent a one-time code to {email}.","en":"We sent a one-time code to {email}.","es":"We sent a one-time code to {email}.","fr":"We sent a one-time code to {email}.","hi":"We sent a one-time code to {email}.","id":"We sent a one-time code to {email}.","pt-BR":"We sent a one-time code to {email}.","ru":"We sent a one-time code to {email}.","ur":"We sent a one-time code to {email}.","zh-CN":"We sent a one-time code to {email}."};

export function admin_signin_codesent(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
