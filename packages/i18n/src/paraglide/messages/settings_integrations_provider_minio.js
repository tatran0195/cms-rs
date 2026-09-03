import { getLocale } from '../runtime.js';

const translations = {"ar":"MinIO","bn":"MinIO","de":"MinIO","en":"MinIO","es":"MinIO","fr":"MinIO","hi":"MinIO","id":"MinIO","pt-BR":"MinIO","ru":"MinIO","ur":"MinIO","zh-CN":"MinIO"};

export function settings_integrations_provider_minio(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
