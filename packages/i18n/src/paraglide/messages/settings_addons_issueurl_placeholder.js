import { getLocale } from '../runtime.js';

const translations = {"ar":"https://github.com/acme/docs/issues/new?body={url}","bn":"https://github.com/acme/docs/issues/new?body={url}","de":"https://github.com/acme/docs/issues/new?body={url}","en":"https://github.com/acme/docs/issues/new?body={url}","es":"https://github.com/acme/docs/issues/new?body={url}","fr":"https://github.com/acme/docs/issues/new?body={url}","hi":"https://github.com/acme/docs/issues/new?body={url}","id":"https://github.com/acme/docs/issues/new?body={url}","pt-BR":"https://github.com/acme/docs/issues/new?body={url}","ru":"https://github.com/acme/docs/issues/new?body={url}","ur":"https://github.com/acme/docs/issues/new?body={url}","zh-CN":"https://github.com/acme/docs/issues/new?body={url}"};

export function settings_addons_issueurl_placeholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
