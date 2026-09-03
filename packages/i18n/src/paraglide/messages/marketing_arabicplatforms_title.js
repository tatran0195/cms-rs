import { getLocale } from '../runtime.js';

const translations = {"ar":"أفضل منصات التوثيق للفرق العربية: مقارنة RTL وMarkdown","bn":"Best documentation platforms for Arabic teams: RTL and Markdown compared","de":"Best documentation platforms for Arabic teams: RTL and Markdown compared","en":"Best documentation platforms for Arabic teams: RTL and Markdown compared","es":"Best documentation platforms for Arabic teams: RTL and Markdown compared","fr":"Best documentation platforms for Arabic teams: RTL and Markdown compared","hi":"Best documentation platforms for Arabic teams: RTL and Markdown compared","id":"Best documentation platforms for Arabic teams: RTL and Markdown compared","pt-BR":"Best documentation platforms for Arabic teams: RTL and Markdown compared","ru":"Best documentation platforms for Arabic teams: RTL and Markdown compared","ur":"Best documentation platforms for Arabic teams: RTL and Markdown compared","zh-CN":"Best documentation platforms for Arabic teams: RTL and Markdown compared"};

export function marketing_arabicplatforms_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
