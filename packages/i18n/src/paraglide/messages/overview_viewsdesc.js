import { getLocale } from '../runtime.js';

const translations = {"ar":"الزيارات إلى هذا الموقع","bn":"এই সাইটে ট্রাফিক","de":"Verkehr auf dieser Website","en":"Traffic to this site","es":"Tráfico a este sitio","fr":"Trafic vers ce site","hi":"इस साइट पर ट्रैफ़िक","id":"Lalu lintas ke situs ini","pt-BR":"Tráfego para este site","ru":"Трафик на этот сайт","ur":"اس سائٹ پر ٹریفک","zh-CN":"本网站的流量"};

export function overview_viewsdesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
