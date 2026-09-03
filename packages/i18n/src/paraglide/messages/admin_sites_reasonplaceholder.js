import { getLocale } from '../runtime.js';

const translations = {"ar":"مثال: بلاغ حقوق أو بريد مزعج أو تصيد","bn":"e.g. DMCA notice, spam, phishing content","de":"e.g. DMCA notice, spam, phishing content","en":"e.g. DMCA notice, spam, phishing content","es":"e.g. DMCA notice, spam, phishing content","fr":"e.g. DMCA notice, spam, phishing content","hi":"e.g. DMCA notice, spam, phishing content","id":"e.g. DMCA notice, spam, phishing content","pt-BR":"e.g. DMCA notice, spam, phishing content","ru":"e.g. DMCA notice, spam, phishing content","ur":"e.g. DMCA notice, spam, phishing content","zh-CN":"e.g. DMCA notice, spam, phishing content"};

export function admin_sites_reasonplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
