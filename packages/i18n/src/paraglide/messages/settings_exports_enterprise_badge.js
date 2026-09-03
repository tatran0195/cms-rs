import { getLocale } from '../runtime.js';

const translations = {"ar":"مؤسسات","bn":"এন্টারপ্রাইজ","de":"Unternehmen","en":"Enterprise","es":"Empresa","fr":"Entreprise","hi":"उद्यम","id":"Perusahaan","pt-BR":"Empresa","ru":"Предприятие","ur":"انٹرپرائز","zh-CN":"企业"};

export function settings_exports_enterprise_badge(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
