import { getLocale } from '../runtime.js';

const translations = {"ar":"إجمالي المهام: {count}","bn":"Total Jobs {count}","de":"Total Jobs {count}","en":"Total Jobs {count}","es":"Total Jobs {count}","fr":"Total Jobs {count}","hi":"Total Jobs {count}","id":"Total Jobs {count}","pt-BR":"Total Jobs {count}","ru":"Total Jobs {count}","ur":"Total Jobs {count}","zh-CN":"Total Jobs {count}"};

export function admin_site_totaljobs(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
