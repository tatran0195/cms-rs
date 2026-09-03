import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تصدير قالب السمة","bn":"থিম টেমপ্লেট রপ্তানি করা যায়নি","de":"Die Designvorlage konnte nicht exportiert werden","en":"Could not export the theme template","es":"No se pudo exportar la plantilla del tema","fr":"Impossible d'exporter le modèle de thème","hi":"थीम टेम्पलेट निर्यात नहीं किया जा सका","id":"Tidak dapat mengekspor template tema","pt-BR":"Não foi possível exportar o modelo de tema","ru":"Не удалось экспортировать шаблон темы.","ur":"تھیم ٹیمپلیٹ کو برآمد نہیں کیا جا سکا","zh-CN":"无法导出主题模板"};

export function settings_theme_exporterror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
