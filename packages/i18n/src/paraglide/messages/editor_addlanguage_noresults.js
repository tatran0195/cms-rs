import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد لغات.","bn":"কোনো ভাষা পাওয়া যায়নি।","de":"Keine Sprachen gefunden.","en":"No languages found.","es":"No se encontraron idiomas.","fr":"Aucune langue trouvée.","hi":"कोई भाषा नहीं मिली.","id":"Tidak ada bahasa yang ditemukan.","pt-BR":"Nenhum idioma encontrado.","ru":"Языки не найдены.","ur":"کوئی زبانیں نہیں ملی۔","zh-CN":"未找到语言。"};

export function editor_addlanguage_noresults(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
