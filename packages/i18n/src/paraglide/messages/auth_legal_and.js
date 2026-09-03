import { getLocale } from '../runtime.js';

const translations = {"ar":" و","bn":"এবং","de":"und die","en":" and the ","es":"y el","fr":"et le","hi":"और","id":"dan itu","pt-BR":"e o","ru":"и","ur":"اور","zh-CN":"和"};

export function auth_legal_and(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
