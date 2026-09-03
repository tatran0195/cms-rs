import { getLocale } from '../runtime.js';

const translations = {"ar":"{pages} صفحات · {languages} لغات","bn":"{pages} pages · {languages} languages","de":"{pages} pages · {languages} languages","en":"{pages} pages · {languages} languages","es":"{pages} pages · {languages} languages","fr":"{pages} pages · {languages} languages","hi":"{pages} pages · {languages} languages","id":"{pages} pages · {languages} languages","pt-BR":"{pages} pages · {languages} languages","ru":"{pages} pages · {languages} languages","ur":"{pages} pages · {languages} languages","zh-CN":"{pages} pages · {languages} languages"};

export function admin_sites_contentsummary(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
