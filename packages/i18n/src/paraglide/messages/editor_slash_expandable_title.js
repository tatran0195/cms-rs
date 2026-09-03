import { getLocale } from '../runtime.js';

const translations = {"ar":"قابل للتوسيع","bn":"সম্প্রসারণযোগ্য","de":"Erweiterbar","en":"Expandable","es":"Ampliable","fr":"Extensible","hi":"विस्तार योग्य","id":"Dapat diperluas","pt-BR":"Expansível","ru":"Расширяемый","ur":"قابل توسیع","zh-CN":"可扩展"};

export function editor_slash_expandable_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
