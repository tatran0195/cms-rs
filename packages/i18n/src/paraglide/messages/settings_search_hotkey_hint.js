import { getLocale } from '../runtime.js';

const translations = {"ar":"اختصار لوحة المفاتيح الذي يفتح البحث.","bn":"কীবোর্ড শর্টকাট যা অনুসন্ধান খোলে।","de":"Tastenkombination, die die Suche öffnet.","en":"Keyboard shortcut that opens search.","es":"Atajo de teclado que abre la búsqueda.","fr":"Raccourci clavier qui ouvre la recherche.","hi":"कीबोर्ड शॉर्टकट जो खोज खोलता है।","id":"Pintasan keyboard yang membuka pencarian.","pt-BR":"Atalho de teclado que abre a pesquisa.","ru":"Сочетание клавиш, открывающее поиск.","ur":"کی بورڈ شارٹ کٹ جو تلاش کو کھولتا ہے۔","zh-CN":"打开搜索的键盘快捷键。"};

export function settings_search_hotkey_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
