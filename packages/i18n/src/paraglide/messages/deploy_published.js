import { getLocale } from '../runtime.js';

const translations = {"ar":"تم النشر — موقعك الآن مباشر","bn":"প্রকাশিত — আপনার সাইট লাইভ","de":"Veröffentlicht – Ihre Website ist online","en":"Published — your site is live","es":"Publicado: su sitio está activo","fr":"Publié : votre site est en ligne","hi":"प्रकाशित - आपकी साइट लाइव है","id":"Diterbitkan — situs Anda aktif","pt-BR":"Publicado – seu site está ativo","ru":"Опубликовано — ваш сайт активен","ur":"شائع ہوا — آپ کی سائٹ لائیو ہے۔","zh-CN":"已发布 — 您的网站已上线"};

export function deploy_published(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
