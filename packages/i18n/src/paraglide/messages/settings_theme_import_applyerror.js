import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تطبيق قالب السمة","bn":"থিম টেমপ্লেট প্রয়োগ করা যায়নি","de":"Die Designvorlage konnte nicht angewendet werden","en":"Could not apply the theme template","es":"No se pudo aplicar la plantilla del tema","fr":"Impossible d'appliquer le modèle de thème","hi":"थीम टेम्पलेट लागू नहीं किया जा सका","id":"Tidak dapat menerapkan template tema","pt-BR":"Não foi possível aplicar o modelo de tema","ru":"Не удалось применить шаблон темы.","ur":"تھیم ٹیمپلیٹ کو لاگو نہیں کیا جا سکا","zh-CN":"无法应用主题模板"};

export function settings_theme_import_applyerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
