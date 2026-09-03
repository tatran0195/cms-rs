import { getLocale } from '../runtime.js';

const translations = {"ar":"حذف الصفحة","bn":"পৃষ্ঠা মুছুন","de":"Seite löschen","en":"Delete page","es":"Eliminar página","fr":"Supprimer la page","hi":"पृष्ठ हटाएँ","id":"Hapus halaman","pt-BR":"Excluir página","ru":"Удалить страницу","ur":"صفحہ حذف کریں۔","zh-CN":"删除页面"};

export function editor_deletepage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
