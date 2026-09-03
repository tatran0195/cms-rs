import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض {label} على الموقع المنشور","bn":"প্রকাশিত সাইটে {label} পরিবেশন করুন","de":"Stellen Sie {label} auf der veröffentlichten Website bereit","en":"Serve {label} on the published site","es":"Publicar {label} en el sitio publicado","fr":"Servir {label} sur le site publié","hi":"प्रकाशित साइट पर {label} परोसें","id":"Sajikan {label} di situs yang dipublikasikan","pt-BR":"Veicule {label} no site publicado","ru":"Размещайте {label} на опубликованном сайте","ur":"شائع شدہ سائٹ پر {label} پیش کریں۔","zh-CN":"在已发布的网站上提供 {label}"};

export function settings_languages_enabledtoggle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
