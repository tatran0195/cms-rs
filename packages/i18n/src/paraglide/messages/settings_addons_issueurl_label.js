import { getLocale } from '../runtime.js';

const translations = {"ar":"قالب رابط المشكلة","bn":"ইস্যু ইউআরএল টেমপ্লেট","de":"URL-Vorlage ausgeben","en":"Issue URL template","es":"Plantilla de URL de emisión","fr":"Modèle d'URL de problème","hi":"यूआरएल टेम्पलेट जारी करें","id":"Templat URL terbitan","pt-BR":"Modelo de URL de problema","ru":"Шаблон URL-адреса выпуска","ur":"یو آر ایل ٹیمپلیٹ جاری کریں۔","zh-CN":"问题 URL 模板"};

export function settings_addons_issueurl_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
