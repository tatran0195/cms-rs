import { getLocale } from '../runtime.js';

const translations = {"ar":"كتلة شيفرة","bn":"কোড ব্লক","de":"Codeblock","en":"Code block","es":"bloque de código","fr":"Bloc de code","hi":"कोड ब्लॉक","id":"Blok kode","pt-BR":"Bloco de código","ru":"Кодовый блок","ur":"کوڈ بلاک","zh-CN":"代码块"};

export function editor_slash_codeblock_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
