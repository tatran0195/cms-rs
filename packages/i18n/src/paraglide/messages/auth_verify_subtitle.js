import { getLocale } from '../runtime.js';

const translations = {"ar":"خطوة أخيرة","bn":"আরও এক ধাপ","de":"Noch ein Schritt","en":"One more step","es":"un paso mas","fr":"Un pas de plus","hi":"एक और कदम","id":"Satu langkah lagi","pt-BR":"Mais um passo","ru":"Еще один шаг","ur":"ایک اور قدم","zh-CN":"又一步"};

export function auth_verify_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
