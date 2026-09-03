import { getLocale } from '../runtime.js';

const translations = {"ar":"صف مدمج","bn":"সংক্ষিপ্ত সারি","de":"Kompakte Zeile","en":"Compact row","es":"Fila compacta","fr":"Ligne compacte","hi":"संक्षिप्त पंक्ति","id":"Baris ringkas","pt-BR":"Linha compacta","ru":"Компактная строка","ur":"مختصر قطار","zh-CN":"紧凑行"};

export function settings_addons_feedback_presentation_compact(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
