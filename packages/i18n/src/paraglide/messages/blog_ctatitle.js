import { getLocale } from '../runtime.js';

const translations = {"ar":"انشر وثائق واضحة بالعربية والإنجليزية","bn":"Ship docs your users will love","de":"Ship docs your users will love","en":"Ship docs your users will love","es":"Ship docs your users will love","fr":"Ship docs your users will love","hi":"Ship docs your users will love","id":"Ship docs your users will love","pt-BR":"Ship docs your users will love","ru":"Ship docs your users will love","ur":"Ship docs your users will love","zh-CN":"Ship docs your users will love"};

export function blog_ctatitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
