import { getLocale } from '../runtime.js';

const translations = {"ar":"إعادة","bn":"আবার করুন","de":"Wiederholen","en":"Redo","es":"Rehacer","fr":"Refaire","hi":"पुनः करें","id":"Ulangi","pt-BR":"Refazer","ru":"Повторить","ur":"دوبارہ کریں۔","zh-CN":"重做"};

export function editor_toolbar_redo(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
