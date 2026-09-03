import { getLocale } from '../runtime.js';

const translations = {"ar":"تحرير هذه الصفحة","bn":"এই পৃষ্ঠাটি সম্পাদনা করুন","de":"Bearbeiten Sie diese Seite","en":"Edit this page","es":"Editar esta página","fr":"Modifier cette page","hi":"इस पृष्ठ को संपादित करें","id":"Edit halaman ini","pt-BR":"Editar esta página","ru":"Редактировать эту страницу","ur":"اس صفحہ میں ترمیم کریں۔","zh-CN":"编辑本页"};

export function site_editpage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
