import { getLocale } from '../runtime.js';

const translations = {"ar":"رمز الحالة","bn":"Status code","de":"Status code","en":"Status code","es":"Status code","fr":"Status code","hi":"Status code","id":"Status code","pt-BR":"Status code","ru":"Status code","ur":"Status code","zh-CN":"Status code"};

export function editor_block_statusplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
