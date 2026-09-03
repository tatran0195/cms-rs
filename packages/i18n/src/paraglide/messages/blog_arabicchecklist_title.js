import { getLocale } from '../runtime.js';

const translations = {"ar":"كيف تنشر وثائق منتج بالعربية من دون أن تكسر RTL والبحث","bn":"How to publish Arabic product documentation without breaking RTL or search","de":"How to publish Arabic product documentation without breaking RTL or search","en":"How to publish Arabic product documentation without breaking RTL or search","es":"How to publish Arabic product documentation without breaking RTL or search","fr":"How to publish Arabic product documentation without breaking RTL or search","hi":"How to publish Arabic product documentation without breaking RTL or search","id":"How to publish Arabic product documentation without breaking RTL or search","pt-BR":"How to publish Arabic product documentation without breaking RTL or search","ru":"How to publish Arabic product documentation without breaking RTL or search","ur":"How to publish Arabic product documentation without breaking RTL or search","zh-CN":"How to publish Arabic product documentation without breaking RTL or search"};

export function blog_arabicchecklist_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
