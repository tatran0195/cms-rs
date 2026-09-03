import { getLocale } from '../runtime.js';

const translations = {"ar":"Amazon S3","bn":"Amazon S3","de":"Amazon S3","en":"Amazon S3","es":"Amazon S3","fr":"Amazon S3","hi":"Amazon S3","id":"Amazon S3","pt-BR":"Amazon S3","ru":"Amazon S3","ur":"Amazon S3","zh-CN":"Amazon S3"};

export function settings_integrations_provider_amazons3(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
