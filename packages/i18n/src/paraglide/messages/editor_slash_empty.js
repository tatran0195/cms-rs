import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد كتل","bn":"কোন ব্লক পাওয়া যায়নি","de":"Keine Blöcke gefunden","en":"No blocks found","es":"No se encontraron bloques","fr":"Aucun bloc trouvé","hi":"कोई ब्लॉक नहीं मिला","id":"Tidak ada blok yang ditemukan","pt-BR":"Nenhum bloco encontrado","ru":"Блоки не найдены","ur":"کوئی بلاکس نہیں ملے","zh-CN":"没有找到块"};

export function editor_slash_empty(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
