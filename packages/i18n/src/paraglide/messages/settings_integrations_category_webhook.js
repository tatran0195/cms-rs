import { getLocale } from '../runtime.js';

const translations = {"ar":"خطافات الويب والأتمتة","bn":"ওয়েবহুকস এবং অটোমেশন","de":"Webhooks und Automatisierung","en":"Webhooks and automation","es":"Webhooks y automatización","fr":"Webhooks et l'automatisation","hi":"वेबहुक और स्वचालन","id":"Pengait dan otomatisasi","pt-BR":"Webhooks e automação","ru":"Webhooks и автоматизация","ur":"ویب ہکس اور آٹومیشن","zh-CN":"网页和自动化"};

export function settings_integrations_category_webhook(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
