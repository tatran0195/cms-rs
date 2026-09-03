import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض في الموقع","bn":"সাইটে দেখুন","de":"Vor Ort ansehen","en":"View on site","es":"Ver en el sitio","fr":"A voir sur place","hi":"साइट पर देखें","id":"Lihat di situs","pt-BR":"Ver no local","ru":"Посмотреть на сайте","ur":"سائٹ پر دیکھیں","zh-CN":"现场查看"};

export function editor_viewonsite(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
