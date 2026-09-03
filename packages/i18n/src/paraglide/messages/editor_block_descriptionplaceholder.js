import { getLocale } from '../runtime.js';

const translations = {"ar":"الوصف","bn":"Description","de":"Description","en":"Description","es":"Description","fr":"Description","hi":"Description","id":"Description","pt-BR":"Description","ru":"Description","ur":"Description","zh-CN":"Description"};

export function editor_block_descriptionplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
