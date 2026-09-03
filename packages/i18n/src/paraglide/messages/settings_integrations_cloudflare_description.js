import { getLocale } from '../runtime.js';

const translations = {"ar":"توفير مُدار للنطاقات المخصصة عبر Cloudflare for SaaS.","bn":"SaaS-এর জন্য Cloudflare-এর মাধ্যমে পরিচালিত কাস্টম ডোমেন প্রভিশনিং।","de":"Managed Custom-Domain Provisioning über Cloudflare für SaaS.","en":"Managed custom-domain provisioning through Cloudflare for SaaS.","es":"Aprovisionamiento gestionado de dominios personalizados mediante Cloudflare para SaaS.","fr":"Gestion de la fourniture du domaine personnalisé via Cloudflare pour SaaS.","hi":"SaaS के लिए Cloudflare के माध्यम से प्रबंधित कस्टम डोमेन प्रावधान।","id":"Mengelola pengaturan domain yang disediakan melalui Cloudflare untuk SaaS.","pt-BR":"Provisionamento gerenciado de domínios personalizados pelo Cloudflare para SaaS.","ru":"Управляемое предоставление пользовательских доменов через Cloudflare для SaaS.","ur":"SaaS کے لیے Cloudflare کے ذریعے زیر انتظام کسٹم ڈومین فراہمی۔","zh-CN":"通过 Cloudflare 为 SaaS 提供托管的自定义域名配置。"};

export function settings_integrations_cloudflare_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
