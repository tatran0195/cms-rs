import { getLocale } from '../runtime.js';

const translations = {"ar":"التشبّع","bn":"স্যাচুরেশন","de":"Sättigung","en":"Saturation","es":"Saturación","fr":"Saturation","hi":"संतृप्ति","id":"Saturasi","pt-BR":"Saturação","ru":"Насыщенность","ur":"سنترپتی","zh-CN":"饱和度"};

export function settings_styling_saturation(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
