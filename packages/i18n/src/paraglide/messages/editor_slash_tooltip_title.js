import { getLocale } from '../runtime.js';

const translations = {"ar":"تلميح","bn":"টুলটিপ","de":"Tooltip","en":"Tooltip","es":"Información sobre herramientas","fr":"Info-bulle","hi":"टूलटिप","id":"Keterangan alat","pt-BR":"Dica","ru":"Подсказка","ur":"ٹول ٹِپ","zh-CN":"工具提示"};

export function editor_slash_tooltip_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
