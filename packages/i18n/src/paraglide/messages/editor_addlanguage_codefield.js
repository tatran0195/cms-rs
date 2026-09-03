import { getLocale } from '../runtime.js';

const translations = {"ar":"الرمز","bn":"কোড","de":"Code","en":"Code","es":"Código","fr":"Coder","hi":"कोड","id":"Kode","pt-BR":"Código","ru":"Код","ur":"کوڈ","zh-CN":"代码"};

export function editor_addlanguage_codefield(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
