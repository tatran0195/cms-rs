import { getLocale } from '../runtime.js';

const translations = {"ar":"غير محدد","bn":"সেট হয় নি","de":"Nicht eingestellt","en":"Not set","es":"No establecido","fr":"Non défini","hi":"सेट नहीं","id":"Tak ditata","pt-BR":"Não definido","ru":"Не установлен","ur":"مقرر نہیں","zh-CN":"未设置"};

export function settings_integrations_value_notset(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
