import { getLocale } from '../runtime.js';

const translations = {"ar":"إزالة المرجع","bn":"রেফারেন্স সরান","de":"Verweis entfernen","en":"Remove reference","es":"Eliminar referencia","fr":"Supprimer la référence","hi":"संदर्भ हटाएँ","id":"Hapus referensi","pt-BR":"Remover referência","ru":"Удалить ссылку","ur":"حوالہ ہٹا دیں۔","zh-CN":"删除参考"};

export function settings_openapi_remove(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
