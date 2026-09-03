import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط معطّل","bn":"ভাঙা লিঙ্ক","de":"Defekter Link","en":"Broken link","es":"enlace roto","fr":"Lien brisé","hi":"टूटा हुआ लिंक","id":"Tautan rusak","pt-BR":"Link quebrado","ru":"Неработающая ссылка","ur":"ٹوٹا ہوا لنک","zh-CN":"链接失效"};

export function overview_publishfailed_type_brokenlink(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
