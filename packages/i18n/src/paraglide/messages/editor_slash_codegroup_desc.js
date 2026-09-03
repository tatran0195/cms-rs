import { getLocale } from '../runtime.js';

const translations = {"ar":"كتل شيفرة بعلامات تبويب بلغات متعددة.","bn":"একাধিক ভাষায় ট্যাবড কোড ব্লক।","de":"Codeblöcke mit Registerkarten in mehreren Sprachen.","en":"Tabbed code blocks in multiple languages.","es":"Bloques de código con pestañas en varios idiomas.","fr":"Blocs de code à onglets dans plusieurs langues.","hi":"कई भाषाओं में टैब्ड कोड ब्लॉक।","id":"Blok kode bertab dalam berbagai bahasa.","pt-BR":"Blocos de código com guias em vários idiomas.","ru":"Блоки кода с вкладками на нескольких языках.","ur":"متعدد زبانوں میں ٹیب شدہ کوڈ بلاکس۔","zh-CN":"多种语言的选项卡式代码块。"};

export function editor_slash_codegroup_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
