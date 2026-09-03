import { getLocale } from '../runtime.js';

const translations = {"ar":"نصيحة","bn":"টিপ","de":"Tipp","en":"Tip","es":"consejo","fr":"Astuce","hi":"युक्ति","id":"Tip","pt-BR":"Dica","ru":"Совет","ur":"ٹپ","zh-CN":"提示"};

export function editor_slash_tip_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
