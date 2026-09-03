import { getLocale } from '../runtime.js';

const translations = {"ar":"درجة اللون","bn":"হিউ","de":"Farbton","en":"Hue","es":"tono","fr":"Teinte","hi":"रंग","id":"Warna","pt-BR":"Matiz","ru":"Хюэ","ur":"رنگت","zh-CN":"色调"};

export function settings_styling_hue(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
