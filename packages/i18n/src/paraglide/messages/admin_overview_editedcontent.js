import { getLocale } from '../runtime.js';

const translations = {"ar":"حرروا المحتوى","bn":"Edited content","de":"Edited content","en":"Edited content","es":"Edited content","fr":"Edited content","hi":"Edited content","id":"Edited content","pt-BR":"Edited content","ru":"Edited content","ur":"Edited content","zh-CN":"Edited content"};

export function admin_overview_editedcontent(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
