import { getLocale } from '../runtime.js';

const translations = {"ar":"تعرض حالة التكامل فقط، من دون موقع المستودع أو بيانات الاعتماد.","bn":"Connected Privacy","de":"Connected Privacy","en":"Connected Privacy","es":"Connected Privacy","fr":"Connected Privacy","hi":"Connected Privacy","id":"Connected Privacy","pt-BR":"Connected Privacy","ru":"Connected Privacy","ur":"Connected Privacy","zh-CN":"Connected Privacy"};

export function admin_site_connectedprivacy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
