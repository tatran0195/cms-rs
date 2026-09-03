import { getLocale } from '../runtime.js';

const translations = {"ar":"الوصف الافتراضي","bn":"ডিফল্ট বিবরণ","de":"Standardbeschreibung","en":"Default description","es":"Descripción predeterminada","fr":"Description par défaut","hi":"डिफ़ॉल्ट विवरण","id":"Deskripsi bawaan","pt-BR":"Descrição padrão","ru":"Описание по умолчанию","ur":"پہلے سے طے شدہ تفصیل","zh-CN":"默认描述"};

export function editor_langsettings_metadescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
