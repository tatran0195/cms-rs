import { getLocale } from '../runtime.js';

const translations = {"ar":"الفرع (اختياري)","bn":"শাখা (ঐচ্ছিক)","de":"Zweig (optional)","en":"Branch (optional)","es":"Sucursal (opcional)","fr":"Branche (facultatif)","hi":"शाखा (वैकल्पिक)","id":"Cabang (opsional)","pt-BR":"Filial (opcional)","ru":"Филиал (необязательно)","ur":"برانچ (اختیاری)","zh-CN":"分支机构（可选）"};

export function settings_import_mintlify_branch(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
