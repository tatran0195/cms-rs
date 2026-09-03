import { getLocale } from '../runtime.js';

const translations = {"ar":"تم تصدير قالب السمة","bn":"থিম টেমপ্লেট রপ্তানি করা হয়েছে","de":"Theme-Vorlage exportiert","en":"Theme template exported","es":"Plantilla de tema exportada","fr":"Modèle de thème exporté","hi":"थीम टेम्पलेट निर्यात किया गया","id":"Templat tema diekspor","pt-BR":"Modelo de tema exportado","ru":"Шаблон темы экспортирован.","ur":"تھیم ٹیمپلیٹ برآمد ہو گیا۔","zh-CN":"主题模板已导出"};

export function settings_theme_exported(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
