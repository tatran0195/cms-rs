import { getLocale } from '../runtime.js';

const translations = {"ar":"DNS جاهز","bn":"DNS প্রস্তুত","de":"DNS-fähig","en":"DNS ready","es":"DNS listo","fr":"DNS prêt","hi":"डीएनएस तैयार","id":"DNS sudah siap","pt-BR":"Pronto para DNS","ru":"DNS готов","ur":"DNS تیار ہے۔","zh-CN":"DNS 就绪"};

export function settings_domain_status_dnsready(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
