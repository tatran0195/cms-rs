import { getLocale } from '../runtime.js';

const translations = {"ar":"المراسي","bn":"নোঙ্গর","de":"Anker","en":"Anchors","es":"Anclas","fr":"Ancres","hi":"एंकर","id":"Jangkar","pt-BR":"Âncoras","ru":"Якоря","ur":"اینکرز","zh-CN":"锚"};

export function settings_navbar_anchors_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
