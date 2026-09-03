import { getLocale } from '../runtime.js';

const translations = {"ar":"لم يتم العثور على نتائج.","bn":"কোন ফলাফল পাওয়া যায়নি.","de":"Keine Ergebnisse gefunden.","en":"No results found.","es":"No se encontraron resultados.","fr":"Aucun résultat trouvé.","hi":"कोई परिणाम नहीं मिला.","id":"Tidak ada hasil yang ditemukan.","pt-BR":"Nenhum resultado encontrado.","ru":"Результаты не найдены.","ur":"کوئی نتیجہ نہیں ملا۔","zh-CN":"没有找到结果。"};

export function command_noresults(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
