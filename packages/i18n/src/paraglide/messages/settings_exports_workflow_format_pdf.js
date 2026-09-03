import { getLocale } from '../runtime.js';

const translations = {"ar":"PDF","bn":"PDF","de":"PDF","en":"PDF","es":"PDF","fr":"PDF","hi":"PDF","id":"PDF","pt-BR":"PDF","ru":"PDF","ur":"PDF","zh-CN":"PDF"};

export function settings_exports_workflow_format_pdf(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
