import { getLocale } from '../runtime.js';

const translations = {"ar":"محتوى ذو صلة","bn":"Related content","de":"Related content","en":"Related content","es":"Related content","fr":"Related content","hi":"Related content","id":"Related content","pt-BR":"Related content","ru":"Related content","ur":"Related content","zh-CN":"Related content"};

export function editor_slash_relatedcontent_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
