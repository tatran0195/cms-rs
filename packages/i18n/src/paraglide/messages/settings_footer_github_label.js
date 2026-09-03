import { getLocale } from '../runtime.js';

const translations = {"ar":"GitHub","bn":"GitHub","de":"GitHub","en":"GitHub","es":"GitHub","fr":"GitHub","hi":"GitHub","id":"GitHub","pt-BR":"GitHub","ru":"GitHub","ur":"GitHub","zh-CN":"GitHub"};

export function settings_footer_github_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
