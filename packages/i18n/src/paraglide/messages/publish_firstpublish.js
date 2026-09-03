import { getLocale } from '../runtime.js';

const translations = {"ar":"أول نشر","bn":"প্রথম প্রকাশ","de":"Erstveröffentlichung","en":"First publish","es":"Primera publicación","fr":"Première publication","hi":"पहले प्रकाशित करें","id":"Publikasikan pertama","pt-BR":"Primeira publicação","ru":"Первая публикация","ur":"پہلے شائع کریں۔","zh-CN":"首次发布"};

export function publish_firstpublish(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
