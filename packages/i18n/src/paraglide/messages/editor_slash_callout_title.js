import { getLocale } from '../runtime.js';

const translations = {"ar":"تنبيه","bn":"কলআউট","de":"Hinweis","en":"Callout","es":"Llamada","fr":"Légende","hi":"कॉलआउट","id":"Info","pt-BR":"Chamada","ru":"Выноска","ur":"کال آؤٹ","zh-CN":"标注"};

export function editor_slash_callout_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
