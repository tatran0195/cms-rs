import { getLocale } from '../runtime.js';

const translations = {"ar":"صفحات","bn":"পৃষ্ঠাগুলি","de":"Seiten","en":"pages","es":"páginas","fr":"pages","hi":"पन्ने","id":"halaman","pt-BR":"páginas","ru":"страницы","ur":"صفحات","zh-CN":"页面"};

export function site_changelogpages(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
