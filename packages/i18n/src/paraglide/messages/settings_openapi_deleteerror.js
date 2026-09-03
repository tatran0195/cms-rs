import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذرت إزالة مرجع OpenAPI.","bn":"OpenAPI রেফারেন্স সরানো যায়নি।","de":"Der Verweis OpenAPI konnte nicht entfernt werden.","en":"Could not remove the OpenAPI reference.","es":"No se pudo eliminar la referencia OpenAPI.","fr":"Impossible de supprimer la référence OpenAPI.","hi":"OpenAPI संदर्भ को हटाया नहीं जा सका.","id":"Tidak dapat menghapus referensi OpenAPI.","pt-BR":"Não foi possível remover a referência OpenAPI.","ru":"Не удалось удалить ссылку OpenAPI.","ur":"OpenAPI حوالہ ہٹایا نہیں جا سکا۔","zh-CN":"无法删除 OpenAPI 引用。"};

export function settings_openapi_deleteerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
