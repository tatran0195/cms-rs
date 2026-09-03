import { getLocale } from '../runtime.js';

const translations = {"ar":"إضافة إعادة توجيه","bn":"পুনঃনির্দেশ যোগ করুন","de":"Weiterleitung hinzufügen","en":"Add redirect","es":"Agregar redireccionamiento","fr":"Ajouter une redirection","hi":"रीडायरेक्ट जोड़ें","id":"Tambahkan pengalihan","pt-BR":"Adicionar redirecionamento","ru":"Добавить перенаправление","ur":"ری ڈائریکٹ شامل کریں۔","zh-CN":"添加重定向"};

export function settings_redirects_add(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
