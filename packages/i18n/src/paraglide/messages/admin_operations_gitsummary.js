import { getLocale } from '../runtime.js';

const translations = {"ar":"عملية {kind}","bn":"{kind} operation","de":"{kind} operation","en":"{kind} operation","es":"{kind} operation","fr":"{kind} operation","hi":"{kind} operation","id":"{kind} operation","pt-BR":"{kind} operation","ru":"{kind} operation","ur":"{kind} operation","zh-CN":"{kind} operation"};

export function admin_operations_gitsummary(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
