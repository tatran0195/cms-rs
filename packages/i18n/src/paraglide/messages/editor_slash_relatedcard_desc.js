import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط إلى صفحة توثيق ذات صلة.","bn":"A link to a related documentation page.","de":"A link to a related documentation page.","en":"A link to a related documentation page.","es":"A link to a related documentation page.","fr":"A link to a related documentation page.","hi":"A link to a related documentation page.","id":"A link to a related documentation page.","pt-BR":"A link to a related documentation page.","ru":"A link to a related documentation page.","ur":"A link to a related documentation page.","zh-CN":"A link to a related documentation page."};

export function editor_slash_relatedcard_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
