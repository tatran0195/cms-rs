import { getLocale } from '../runtime.js';

const translations = {"ar":"مهمل","bn":"অবমূল্যায়ন","de":"veraltet","en":"deprecated","es":"obsoleto","fr":"obsolète","hi":"बहिष्कृत","id":"tidak digunakan lagi","pt-BR":"obsoleto","ru":"устарел","ur":"فرسودہ","zh-CN":"已弃用"};

export function site_deprecated(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
