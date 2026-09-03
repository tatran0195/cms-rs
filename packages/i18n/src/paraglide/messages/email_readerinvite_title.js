import { getLocale } from '../runtime.js';

const translations = {"ar":"الوصول إلى التوثيق الخاص","bn":"Private documentation access","de":"Private documentation access","en":"Private documentation access","es":"Private documentation access","fr":"Private documentation access","hi":"Private documentation access","id":"Private documentation access","pt-BR":"Private documentation access","ru":"Private documentation access","ur":"Private documentation access","zh-CN":"Private documentation access"};

export function email_readerinvite_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
