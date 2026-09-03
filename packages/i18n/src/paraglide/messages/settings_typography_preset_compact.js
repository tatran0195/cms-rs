import { getLocale } from '../runtime.js';

const translations = {"ar":"مضغوط","bn":"কমপ্যাক্ট","de":"Kompakt","en":"Compact","es":"Compacto","fr":"Compacte","hi":"सघन","id":"Kompak","pt-BR":"Compacto","ru":"Компактный","ur":"کمپیکٹ","zh-CN":"紧凑型"};

export function settings_typography_preset_compact(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
