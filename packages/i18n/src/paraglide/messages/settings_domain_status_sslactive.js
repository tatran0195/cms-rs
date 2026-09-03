import { getLocale } from '../runtime.js';

const translations = {"ar":"TLS نشط","bn":"TLS সক্রিয়","de":"TLS aktiv","en":"TLS active","es":"TLS activo","fr":"TLS actif","hi":"टीएलएस सक्रिय","id":"TLS aktif","pt-BR":"TLS ativo","ru":"TLS активен","ur":"TLS فعال","zh-CN":"TLS 活跃"};

export function settings_domain_status_sslactive(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
