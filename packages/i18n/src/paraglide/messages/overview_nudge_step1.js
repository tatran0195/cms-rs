import { getLocale } from '../runtime.js';

const translations = {"ar":"حرّر صفحة","bn":"একটি পৃষ্ঠা সম্পাদনা করুন","de":"Bearbeiten Sie eine Seite","en":"Edit a page","es":"Editar una página","fr":"Modifier une page","hi":"एक पृष्ठ संपादित करें","id":"Mengedit halaman","pt-BR":"Editar uma página","ru":"Редактировать страницу","ur":"ایک صفحہ میں ترمیم کریں۔","zh-CN":"编辑页面"};

export function overview_nudge_step1(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
