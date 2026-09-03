import { getLocale } from '../runtime.js';

const translations = {"ar":"وثائق المنتج","bn":"product documentation","de":"product documentation","en":"product documentation","es":"product documentation","fr":"product documentation","hi":"product documentation","id":"product documentation","pt-BR":"product documentation","ru":"product documentation","ur":"product documentation","zh-CN":"product documentation"};

export function blog_arabicchecklist_tagproductdocs(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
