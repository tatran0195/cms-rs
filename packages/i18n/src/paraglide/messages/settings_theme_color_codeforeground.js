import { getLocale } from '../runtime.js';

const translations = {"ar":"نص الشيفرة","bn":"কোড টেক্সট","de":"Codetext","en":"Code text","es":"Texto de código","fr":"Texte du code","hi":"कोड पाठ","id":"Teks kode","pt-BR":"Texto do código","ru":"Текст кода","ur":"کوڈ کا متن","zh-CN":"代码文字"};

export function settings_theme_color_codeforeground(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
