import { getLocale } from '../runtime.js';

const translations = {"ar":"نعرض بيانات تعريف الموقع اللازمة للدعم فقط، من دون أسرار أو محتوى خاص.","bn":"Identity Privacy","de":"Identity Privacy","en":"Identity Privacy","es":"Identity Privacy","fr":"Identity Privacy","hi":"Identity Privacy","id":"Identity Privacy","pt-BR":"Identity Privacy","ru":"Identity Privacy","ur":"Identity Privacy","zh-CN":"Identity Privacy"};

export function admin_site_identityprivacy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
