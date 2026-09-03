import { getLocale } from '../runtime.js';

const translations = {"ar":"السر","bn":"গোপন","de":"Geheimnis","en":"Secret","es":"secreto","fr":"Secret","hi":"गुप्त","id":"Rahasia","pt-BR":"Segredo","ru":"Секрет","ur":"خفیہ","zh-CN":"秘密"};

export function settings_git_webhook_secret(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
