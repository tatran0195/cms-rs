import { getLocale } from '../runtime.js';

const translations = {"ar":"قوالب السمات","bn":"থিম টেমপ্লেট","de":"Themenvorlagen","en":"Theme templates","es":"Plantillas temáticas","fr":"Modèles de thème","hi":"थीम टेम्पलेट","id":"Templat tema","pt-BR":"Modelos de tema","ru":"Шаблоны тем","ur":"تھیم ٹیمپلیٹس","zh-CN":"主题模板"};

export function settings_theme_exchange(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
