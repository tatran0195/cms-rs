import { getLocale } from '../runtime.js';

const translations = {"ar":"لغويات","bn":"ব্যাকরণ","de":"Grammatik","en":"Grammar","es":"Gramática","fr":"Grammaire","hi":"व्याकरण","id":"Tata bahasa","pt-BR":"Gramática","ru":"Грамматика","ur":"گرامر","zh-CN":"语法"};

export function overview_publishfailed_type_grammar(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
