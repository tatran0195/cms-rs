import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد نتائج.","bn":"কোনো ফলাফল নেই।","de":"Keine Ergebnisse.","en":"No results.","es":"Sin resultados.","fr":"Aucun résultat.","hi":"कोई परिणाम नहीं.","id":"Tidak ada hasil.","pt-BR":"Sem resultados.","ru":"Никаких результатов.","ur":"کوئی نتیجہ نہیں نکلا۔","zh-CN":"没有结果。"};

export function site_searchempty(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
