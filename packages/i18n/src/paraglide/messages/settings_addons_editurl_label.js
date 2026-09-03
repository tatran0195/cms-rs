import { getLocale } from '../runtime.js';

const translations = {"ar":"قالب رابط التحرير","bn":"URL টেমপ্লেট সম্পাদনা করুন","de":"URL-Vorlage bearbeiten","en":"Edit URL template","es":"Editar plantilla de URL","fr":"Modifier le modèle d'URL","hi":"यूआरएल टेम्पलेट संपादित करें","id":"Edit kerangka URL","pt-BR":"Editar modelo de URL","ru":"Изменить шаблон URL","ur":"URL ٹیمپلیٹ میں ترمیم کریں۔","zh-CN":"编辑网址模板"};

export function settings_addons_editurl_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
