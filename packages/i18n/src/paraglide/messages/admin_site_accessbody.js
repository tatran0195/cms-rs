import { getLocale } from '../runtime.js';

const translations = {"ar":"الأعضاء الذين يملكون صلاحية الوصول إلى مساحة العمل لهذا الموقع.","bn":"Access Body","de":"Access Body","en":"Access Body","es":"Access Body","fr":"Access Body","hi":"Access Body","id":"Access Body","pt-BR":"Access Body","ru":"Access Body","ur":"Access Body","zh-CN":"Access Body"};

export function admin_site_accessbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
