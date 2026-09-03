import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ تجهيز TLS","bn":"TLS বিধান","de":"TLS-Bereitstellung","en":"TLS provisioning","es":"Aprovisionamiento TLS","fr":"Approvisionnement TLS","hi":"टीएलएस प्रावधान","id":"Penyediaan TLS","pt-BR":"Provisionamento de TLS","ru":"Предоставление TLS","ur":"TLS کی فراہمی","zh-CN":"TLS 配置"};

export function settings_domain_status_sslprovisioning(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
