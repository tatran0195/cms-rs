import { getLocale } from '../runtime.js';

const translations = {"ar":"عند الإيقاف، تُضاف علامة noindex إلى كل صفحة.","bn":"বন্ধ হলে, প্রতিটি পৃষ্ঠায় একটি noindex ট্যাগ যোগ করা হয়।","de":"Wenn diese Option deaktiviert ist, wird jeder Seite ein Noindex-Tag hinzugefügt.","en":"When off, a noindex tag is added to every page.","es":"Cuando está desactivado, se agrega una etiqueta noindex a cada página.","fr":"Lorsqu'elle est désactivée, une balise noindex est ajoutée à chaque page.","hi":"बंद होने पर, प्रत्येक पृष्ठ पर एक नोइंडेक्स टैग जोड़ा जाता है।","id":"Jika tidak aktif, tag noindex ditambahkan ke setiap halaman.","pt-BR":"Quando desativado, uma tag noindex é adicionada a cada página.","ru":"Если параметр отключен, тег noindex добавляется на каждую страницу.","ur":"آف ہونے پر، ہر صفحہ پر ایک noindex ٹیگ شامل کیا جاتا ہے۔","zh-CN":"关闭时，将向每个页面添加 noindex 标记。"};

export function settings_seo_allowindex_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
