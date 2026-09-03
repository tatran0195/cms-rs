import { getLocale } from '../runtime.js';

const translations = {"ar":"عريض","bn":"সাহসী","de":"Fett","en":"Bold","es":"Negrita","fr":"Audacieux","hi":"साहसी","id":"Berani","pt-BR":"Ousado","ru":"Жирный","ur":"بولڈ","zh-CN":"大胆"};

export function editor_format_bold(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
