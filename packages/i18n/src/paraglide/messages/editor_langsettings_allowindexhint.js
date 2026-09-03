import { getLocale } from '../runtime.js';

const translations = {"ar":"أوقفه لإبقاء هذه اللغة خارج محركات البحث.","bn":"এই ভাষাটিকে সার্চ ইঞ্জিন থেকে দূরে রাখতে বন্ধ করুন।","de":"Deaktivieren Sie diese Option, um diese Sprache von Suchmaschinen fernzuhalten.","en":"Turn off to keep this language out of search engines.","es":"Desactívalo para mantener este idioma fuera de los motores de búsqueda.","fr":"Désactivez-la pour que cette langue ne figure pas dans les moteurs de recherche.","hi":"इस भाषा को खोज इंजन से दूर रखने के लिए इसे बंद करें।","id":"Nonaktifkan agar bahasa ini tidak masuk ke mesin telusur.","pt-BR":"Desative para manter esse idioma fora dos mecanismos de pesquisa.","ru":"Отключите, чтобы этот язык не попадал в поисковые системы.","ur":"اس زبان کو سرچ انجنوں سے دور رکھنے کے لیے بند کریں۔","zh-CN":"关闭该语言可以使搜索引擎排除该语言。"};

export function editor_langsettings_allowindexhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
