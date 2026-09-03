import { getLocale } from '../runtime.js';

const translations = {"ar":"مدقق القواعد","bn":"ব্যাকরণ লিন্টার","de":"Grammatik-Linter","en":"Grammar linter","es":"Linter de gramática","fr":"Linter de grammaire","hi":"व्याकरण लिंटर","id":"Linter tata bahasa","pt-BR":"Linguagem gramatical","ru":"Грамматический линтер","ur":"گرامر لنٹر","zh-CN":"语法检查"};

export function settings_addons_grammarlinter_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
