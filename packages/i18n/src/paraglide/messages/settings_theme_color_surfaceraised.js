import { getLocale } from '../runtime.js';

const translations = {"ar":"السطح المرتفع","bn":"উত্থিত পৃষ্ঠ","de":"Erhöhte Oberfläche","en":"Raised surface","es":"superficie elevada","fr":"Surface surélevée","hi":"उभरी हुई सतह","id":"Permukaan terangkat","pt-BR":"Superfície elevada","ru":"Поднятая поверхность","ur":"ابھری ہوئی سطح","zh-CN":"凸起表面"};

export function settings_theme_color_surfaceraised(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
