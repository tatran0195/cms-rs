import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر التحميل","bn":"Load Error","de":"Load Error","en":"Load Error","es":"Load Error","fr":"Load Error","hi":"Load Error","id":"Load Error","pt-BR":"Load Error","ru":"Load Error","ur":"Load Error","zh-CN":"Load Error"};

export function admin_user_loaderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
