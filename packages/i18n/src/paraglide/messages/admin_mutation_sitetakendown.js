import { getLocale } from '../runtime.js';

const translations = {"ar":"أُوقف الموقع","bn":"Site taken down","de":"Site taken down","en":"Site taken down","es":"Site taken down","fr":"Site taken down","hi":"Site taken down","id":"Site taken down","pt-BR":"Site taken down","ru":"Site taken down","ur":"Site taken down","zh-CN":"Site taken down"};

export function admin_mutation_sitetakendown(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
