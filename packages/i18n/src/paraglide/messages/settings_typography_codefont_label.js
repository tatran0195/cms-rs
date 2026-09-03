import { getLocale } from '../runtime.js';

const translations = {"ar":"خط التعليمات البرمجية","bn":"কোড ফন্ট","de":"Codeschriftart","en":"Code font","es":"Fuente de código","fr":"Police de code","hi":"कोड फ़ॉन्ट","id":"Font kode","pt-BR":"Fonte do código","ru":"Шрифт кода","ur":"کوڈ فونٹ","zh-CN":"代码字体"};

export function settings_typography_codefont_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
