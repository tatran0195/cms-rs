import { getLocale } from '../runtime.js';

const translations = {"ar":"إزالة إعادة التوجيه","bn":"পুনঃনির্দেশ সরান","de":"Weiterleitung entfernen","en":"Remove redirect","es":"Eliminar redireccionamiento","fr":"Supprimer la redirection","hi":"पुनर्निर्देशन हटाएँ","id":"Hapus pengalihan","pt-BR":"Remover redirecionamento","ru":"Удалить перенаправление","ur":"ری ڈائریکٹ کو ہٹا دیں۔","zh-CN":"删除重定向"};

export function settings_redirects_remove(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
