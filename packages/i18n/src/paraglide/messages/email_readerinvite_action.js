import { getLocale } from '../runtime.js';

const translations = {"ar":"تفعيل صلاحية القراءة","bn":"Activate reader access","de":"Activate reader access","en":"Activate reader access","es":"Activate reader access","fr":"Activate reader access","hi":"Activate reader access","id":"Activate reader access","pt-BR":"Activate reader access","ru":"Activate reader access","ur":"Activate reader access","zh-CN":"Activate reader access"};

export function email_readerinvite_action(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
