import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء سر","bn":"গোপন উত্পন্ন","de":"Geheimnis generieren","en":"Generate secret","es":"generar secreto","fr":"Générer un secret","hi":"रहस्य उत्पन्न करें","id":"Hasilkan rahasia","pt-BR":"Gerar segredo","ru":"Создать секрет","ur":"راز پیدا کریں۔","zh-CN":"生成秘密"};

export function settings_git_webhook_generate(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
