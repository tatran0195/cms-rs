import { getLocale } from '../runtime.js';

const translations = {"ar":"JSON قالب السمة","bn":"থিম টেমপ্লেট JSON","de":"Theme-Vorlage JSON","en":"Theme template JSON","es":"Plantilla de tema JSON","fr":"Modèle de thème JSON","hi":"थीम टेम्पलेट JSON","id":"Templat tema JSON","pt-BR":"Modelo de tema JSON","ru":"Шаблон темы JSON","ur":"تھیم ٹیمپلیٹ JSON","zh-CN":"主题模板JSON"};

export function settings_theme_importjson(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
