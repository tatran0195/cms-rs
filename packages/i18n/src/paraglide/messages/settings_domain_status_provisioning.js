import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ التجهيز","bn":"প্রভিশনিং","de":"Bereitstellung","en":"Provisioning","es":"Aprovisionamiento","fr":"Approvisionnement","hi":"प्रावधान","id":"Penyediaan","pt-BR":"Provisionamento","ru":"Обеспечение","ur":"فراہمی","zh-CN":"配置"};

export function settings_domain_status_provisioning(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
