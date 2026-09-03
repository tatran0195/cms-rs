import { getLocale } from '../runtime.js';

const translations = {"ar":"تم تطبيق قالب السمة على المسودة","bn":"খসড়াতে থিম টেমপ্লেট প্রয়োগ করা হয়েছে","de":"Auf den Entwurf angewendete Themenvorlage","en":"Theme template applied to the draft","es":"Plantilla temática aplicada al borrador.","fr":"Modèle de thème appliqué au brouillon","hi":"थीम टेम्पलेट ड्राफ्ट पर लागू किया गया","id":"Templat tema diterapkan ke draf","pt-BR":"Modelo de tema aplicado ao rascunho","ru":"Шаблон темы, примененный к черновику","ur":"مسودہ پر لاگو تھیم ٹیمپلیٹ","zh-CN":"应用于草稿的主题模板"};

export function settings_theme_import_applied(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
