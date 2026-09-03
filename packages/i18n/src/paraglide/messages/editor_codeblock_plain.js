import { getLocale } from '../runtime.js';

const translations = {"ar":"نص عادي","bn":"সরল পাঠ্য","de":"Klartext","en":"Plain text","es":"Texto sin formato","fr":"Texte brut","hi":"सादा पाठ","id":"Teks biasa","pt-BR":"Texto simples","ru":"Обычный текст","ur":"سادہ متن","zh-CN":"纯文本"};

export function editor_codeblock_plain(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
