import { getLocale } from '../runtime.js';

const translations = {"ar":"تصدير السمة","bn":"থিম রপ্তানি করুন","de":"Thema exportieren","en":"Export theme","es":"Tema de exportación","fr":"Thème d'exportation","hi":"विषय निर्यात करें","id":"Ekspor tema","pt-BR":"Exportar tema","ru":"Экспортировать тему","ur":"تھیم برآمد کریں۔","zh-CN":"导出主题"};

export function settings_theme_export(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
