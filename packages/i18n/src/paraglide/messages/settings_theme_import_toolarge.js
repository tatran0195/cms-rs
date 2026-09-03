import { getLocale } from '../runtime.js';

const translations = {"ar":"يتجاوز قالب السمة حد 128 كيلوبايت.","bn":"থিম টেমপ্লেট 128 KiB সীমা অতিক্রম করেছে৷","de":"Die Designvorlage überschreitet das Limit von 128 KiB.","en":"Theme template exceeds the 128 KiB limit.","es":"La plantilla del tema supera el límite de 128 KiB.","fr":"Le modèle de thème dépasse la limite de 128 Ko.","hi":"थीम टेम्प्लेट 128 KiB सीमा से अधिक है.","id":"Templat tema melebihi batas 128 KiB.","pt-BR":"O modelo de tema excede o limite de 128 KiB.","ru":"Размер шаблона темы превышает ограничение в 128 КиБ.","ur":"تھیم ٹیمپلیٹ 128 KiB کی حد سے زیادہ ہے۔","zh-CN":"主题模板超过 128 KiB 限制。"};

export function settings_theme_import_toolarge(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
