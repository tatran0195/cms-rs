import { getLocale } from '../runtime.js';

const translations = {"ar":"اكتب للبحث…","bn":"অনুসন্ধান করতে টাইপ করুন...","de":"Geben Sie Folgendes ein, um zu suchen …","en":"Type to search…","es":"Escribe para buscar…","fr":"Tapez pour rechercher…","hi":"खोजने के लिए टाइप करें...","id":"Ketik untuk mencari…","pt-BR":"Digite para pesquisar…","ru":"Введите для поиска…","ur":"تلاش کرنے کے لیے ٹائپ کریں…","zh-CN":"输入搜索..."};

export function site_searchprompt(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
