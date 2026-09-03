import { getLocale } from '../runtime.js';

const translations = {"ar":"ارتفاع السطر","bn":"লাইনের উচ্চতা","de":"Zeilenhöhe","en":"Line height","es":"altura de la línea","fr":"Hauteur de ligne","hi":"लाइन की ऊंचाई","id":"Tinggi garis","pt-BR":"Altura da linha","ru":"Высота строки","ur":"لائن کی اونچائی","zh-CN":"线高"};

export function settings_typography_leading_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
