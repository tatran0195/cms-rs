import { getLocale } from '../runtime.js';

const translations = {"ar":"يضيف noindex,nofollow لمنع فهرسة هذه الصفحة.","bn":"noindex,nofollow যোগ করে তাই এই পৃষ্ঠাটি ইন্ডেক্স করা হয় না।","de":"Fügt noindex,nofollow hinzu, sodass diese Seite nicht indiziert wird.","en":"Adds noindex,nofollow so this page is not indexed.","es":"Agrega noindex,nofollow para que esta página no esté indexada.","fr":"Ajoute noindex,nofollow pour que cette page ne soit pas indexée.","hi":"noindex,nofollow जोड़ता है ताकि यह पृष्ठ अनुक्रमित न हो।","id":"Menambahkan noindex,nofollow agar halaman ini tidak terindeks.","pt-BR":"Adiciona noindex,nofollow para que esta página não seja indexada.","ru":"Добавляет noindex,nofollow, чтобы эта страница не индексировалась.","ur":"noindex،nofollow شامل کرتا ہے تاکہ یہ صفحہ انڈیکس نہ ہو۔","zh-CN":"添加 noindex,nofollow 以便该页面不被索引。"};

export function editor_pagesettings_noindexhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
