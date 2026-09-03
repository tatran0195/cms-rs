import { getLocale } from '../runtime.js';

const translations = {"ar":"محرّر","bn":"সম্পাদক","de":"Herausgeber","en":"Editor","es":"Redactor","fr":"Éditeur","hi":"संपादक","id":"Penyunting","pt-BR":"Editor","ru":"Редактор","ur":"ایڈیٹر","zh-CN":"编辑"};

export function members_role_editor(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
