import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط الاستلام","bn":"পেলোড URL","de":"Payload-URL","en":"Payload URL","es":"URL de carga útil","fr":"URL de la charge utile","hi":"पेलोड यूआरएल","id":"URL muatan","pt-BR":"URL de carga útil","ru":"URL-адрес полезной нагрузки","ur":"پے لوڈ URL","zh-CN":"负载网址"};

export function settings_git_webhook_url(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
