import { getLocale } from '../runtime.js';

const translations = {"ar":"إضافة مرجع API","bn":"API রেফারেন্স যোগ করুন","de":"Fügen Sie die Referenz API hinzu","en":"Add API reference","es":"Agregar referencia API","fr":"Ajouter la référence API","hi":"API संदर्भ जोड़ें","id":"Tambahkan referensi API","pt-BR":"Adicionar referência API","ru":"Добавьте ссылку API","ur":"API حوالہ شامل کریں۔","zh-CN":"添加 API 参考"};

export function settings_openapi_add(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
