import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض الموقع المنشور","bn":"লাইভ সাইট দেখুন","de":"Live-Site anzeigen","en":"View live site","es":"Ver sitio en vivo","fr":"Voir le site en direct","hi":"लाइव साइट देखें","id":"Lihat situs langsung","pt-BR":"Ver site ao vivo","ru":"Посмотреть сайт в реальном времени","ur":"لائیو سائٹ دیکھیں","zh-CN":"查看现场直播"};

export function overview_viewsite(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
