import { getLocale } from '../runtime.js';

const translations = {"ar":"وثائق المنتج بالعربية: قائمة فحص RTL والبحث | Nibleaf","bn":"Arabic product documentation: RTL and search checklist | Nibleaf","de":"Arabic product documentation: RTL and search checklist | Nibleaf","en":"Arabic product documentation: RTL and search checklist | Nibleaf","es":"Arabic product documentation: RTL and search checklist | Nibleaf","fr":"Arabic product documentation: RTL and search checklist | Nibleaf","hi":"Arabic product documentation: RTL and search checklist | Nibleaf","id":"Arabic product documentation: RTL and search checklist | Nibleaf","pt-BR":"Arabic product documentation: RTL and search checklist | Nibleaf","ru":"Arabic product documentation: RTL and search checklist | Nibleaf","ur":"Arabic product documentation: RTL and search checklist | Nibleaf","zh-CN":"Arabic product documentation: RTL and search checklist | Nibleaf"};

export function blog_arabicchecklist_metatitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
