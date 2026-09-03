import { getLocale } from '../runtime.js';

const translations = {"ar":"أيقونة الموقع","bn":"ফেভিকন","de":"Favicon","en":"Favicon","es":"favicon","fr":"Icône de favori","hi":"फ़ेविकॉन","id":"favicon","pt-BR":"Favicon","ru":"Фавикон","ur":"فیویکن","zh-CN":"网站图标"};

export function settings_branding_favicon_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
