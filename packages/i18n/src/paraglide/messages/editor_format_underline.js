import { getLocale } from '../runtime.js';

const translations = {"ar":"تسطير","bn":"আন্ডারলাইন করুন","de":"Unterstreichen","en":"Underline","es":"subrayado","fr":"Souligner","hi":"रेखांकित करें","id":"Garis bawahi","pt-BR":"Sublinhado","ru":"Подчеркнуть","ur":"انڈر لائن","zh-CN":"下划线"};

export function editor_format_underline(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
