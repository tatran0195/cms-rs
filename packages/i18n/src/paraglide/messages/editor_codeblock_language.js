import { getLocale } from '../runtime.js';

const translations = {"ar":"لغة الشيفرة","bn":"কোড ভাষা","de":"Codesprache","en":"Code language","es":"lenguaje de código","fr":"Langage des codes","hi":"कोड भाषा","id":"Bahasa kode","pt-BR":"Linguagem de código","ru":"Язык кода","ur":"کوڈ کی زبان","zh-CN":"代码语言"};

export function editor_codeblock_language(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
