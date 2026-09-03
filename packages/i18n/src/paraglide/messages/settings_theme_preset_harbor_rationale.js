import { getLocale } from '../runtime.js';

const translations = {"ar":"الأنسب لأدلة المنتجات والمكتبات المرجعية التي تحتاج تنقّلًا واضحًا بثلاثة أعمدة.","bn":"Best for product guides and reference libraries that need dependable three-column wayfinding.","de":"Best for product guides and reference libraries that need dependable three-column wayfinding.","en":"Best for product guides and reference libraries that need dependable three-column wayfinding.","es":"Best for product guides and reference libraries that need dependable three-column wayfinding.","fr":"Best for product guides and reference libraries that need dependable three-column wayfinding.","hi":"Best for product guides and reference libraries that need dependable three-column wayfinding.","id":"Best for product guides and reference libraries that need dependable three-column wayfinding.","pt-BR":"Best for product guides and reference libraries that need dependable three-column wayfinding.","ru":"Best for product guides and reference libraries that need dependable three-column wayfinding.","ur":"Best for product guides and reference libraries that need dependable three-column wayfinding.","zh-CN":"Best for product guides and reference libraries that need dependable three-column wayfinding."};

export function settings_theme_preset_harbor_rationale(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
