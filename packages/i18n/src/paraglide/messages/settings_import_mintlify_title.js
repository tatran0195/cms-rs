import { getLocale } from '../runtime.js';

const translations = {"ar":"Mintlify","bn":"Mintlify","de":"Mintlify","en":"Mintlify","es":"Mintlify","fr":"Mintlify","hi":"Mintlify","id":"Mintlify","pt-BR":"Mintlify","ru":"Mintlify","ur":"Mintlify","zh-CN":"Mintlify"};

export function settings_import_mintlify_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
