import { getLocale } from '../runtime.js';

const translations = {"ar":"https://github.com/acme/docs/edit/main/{path}.mdx","bn":"https://github.com/acme/docs/edit/main/{path}.mdx","de":"https://github.com/acme/docs/edit/main/{path}.mdx","en":"https://github.com/acme/docs/edit/main/{path}.mdx","es":"https://github.com/acme/docs/edit/main/{path}.mdx","fr":"https://github.com/acme/docs/edit/main/{path}.mdx","hi":"https://github.com/acme/docs/edit/main/{path}.mdx","id":"https://github.com/acme/docs/edit/main/{path}.mdx","pt-BR":"https://github.com/acme/docs/edit/main/{path}.mdx","ru":"https://github.com/acme/docs/edit/main/{path}.mdx","ur":"https://github.com/acme/docs/edit/main/{path}.mdx","zh-CN":"https://github.com/acme/docs/edit/main/{path}.mdx"};

export function settings_addons_editurl_placeholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
