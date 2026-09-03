import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر GitBook إذا كنت تحتاج مزامنة GitLab ثنائية الاتجاه أو المحتوى المتكيف أو SAML اليوم.","bn":"Arabic page content","de":"Arabic page content","en":"اختر GitBook إذا كنت تحتاج مزامنة GitLab ثنائية الاتجاه أو المحتوى المتكيف أو SAML اليوم.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_landing_alternativegitbook(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
