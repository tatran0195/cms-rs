import { getLocale } from '../runtime.js';

const translations = {"ar":"أقسام قابلة للطي.","bn":"সংকোচনযোগ্য বিভাগ।","de":"Zusammenklappbare Abschnitte.","en":"Collapsible sections.","es":"Secciones plegables.","fr":"Sections pliables.","hi":"बंधनेवाला अनुभाग.","id":"Bagian yang dapat dilipat.","pt-BR":"Seções dobráveis.","ru":"Складные секции.","ur":"ٹوٹنے کے قابل حصے۔","zh-CN":"可折叠部分。"};

export function editor_slash_accordion_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
