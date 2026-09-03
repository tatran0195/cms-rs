import { getLocale } from '../runtime.js';

const translations = {"ar":"قالب السمة ليس JSON صالحًا.","bn":"থিম টেমপ্লেটটি বৈধ নয় JSON৷","de":"Die Designvorlage ist ungültig JSON.","en":"Theme template is not valid JSON.","es":"La plantilla del tema no contiene JSON válido.","fr":"Le modèle de thème ne contient pas de JSON valide.","hi":"थीम टेम्पलेट मान्य नहीं है JSON.","id":"Templat tema tidak valid JSON.","pt-BR":"O modelo de tema não é válido JSON.","ru":"Недопустимый шаблон темы JSON.","ur":"تھیم ٹیمپلیٹ درست نہیں ہے JSON۔","zh-CN":"主题模板无效 JSON。"};

export function settings_theme_import_invalidjson(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
