import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر الوصول إلى الحافظة. حدد الرابط وانسخه يدويًا.","bn":"Could not access the clipboard. Select and copy the link manually.","de":"Could not access the clipboard. Select and copy the link manually.","en":"Could not access the clipboard. Select and copy the link manually.","es":"Could not access the clipboard. Select and copy the link manually.","fr":"Could not access the clipboard. Select and copy the link manually.","hi":"Could not access the clipboard. Select and copy the link manually.","id":"Could not access the clipboard. Select and copy the link manually.","pt-BR":"Could not access the clipboard. Select and copy the link manually.","ru":"Could not access the clipboard. Select and copy the link manually.","ur":"Could not access the clipboard. Select and copy the link manually.","zh-CN":"Could not access the clipboard. Select and copy the link manually."};

export function admin_sites_clipboarderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
