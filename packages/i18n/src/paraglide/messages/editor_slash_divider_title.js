import { getLocale } from '../runtime.js';

const translations = {"ar":"فاصل","bn":"বিভাজক","de":"Teiler","en":"Divider","es":"Divisor","fr":"Diviseur","hi":"विभाजक","id":"Pembagi","pt-BR":"Divisor","ru":"Разделитель","ur":"تقسیم کرنے والا","zh-CN":"分频器"};

export function editor_slash_divider_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
