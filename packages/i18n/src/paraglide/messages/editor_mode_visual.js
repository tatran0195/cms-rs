import { getLocale } from '../runtime.js';

const translations = {"ar":"مرئي","bn":"ভিজ্যুয়াল","de":"Visuell","en":"Visual","es":"visuales","fr":"Visuel","hi":"दृश्य","id":"Visual","pt-BR":"Visuais","ru":"Визуальный","ur":"بصری","zh-CN":"视觉"};

export function editor_mode_visual(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
