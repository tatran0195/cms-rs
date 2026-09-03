import { getLocale } from '../runtime.js';

const translations = {"ar":"عمليات إعادة التوجيه","bn":"পুনঃনির্দেশ","de":"Weiterleitungen","en":"Redirects","es":"Redirecciones","fr":"Redirections","hi":"पुनर्निर्देशन","id":"Pengalihan","pt-BR":"Redirecionamentos","ru":"Перенаправления","ur":"ری ڈائریکٹ کرتا ہے۔","zh-CN":"重定向"};

export function settings_redirects_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
