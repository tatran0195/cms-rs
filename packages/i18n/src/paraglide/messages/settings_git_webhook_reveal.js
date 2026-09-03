import { getLocale } from '../runtime.js';

const translations = {"ar":"إظهار السر","bn":"গোপন কথা প্রকাশ করুন","de":"Geheimnis enthüllen","en":"Reveal secret","es":"revelar secreto","fr":"Révéler le secret","hi":"रहस्य उजागर करें","id":"Ungkapkan rahasia","pt-BR":"Revelar segredo","ru":"Раскрыть секрет","ur":"راز افشا کرنا","zh-CN":"揭秘"};

export function settings_git_webhook_reveal(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
