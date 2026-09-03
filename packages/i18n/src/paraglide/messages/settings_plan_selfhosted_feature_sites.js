import { getLocale } from '../runtime.js';

const translations = {"ar":"مواقع توثيق مستضافة","bn":"হোস্ট করা ডক্স সাইট","de":"Gehostete Dokumentenseiten","en":"Hosted docs sites","es":"Sitios de documentos alojados","fr":"Sites de documentation hébergés","hi":"होस्ट की गई दस्तावेज़ साइटें","id":"Situs dokumen yang dihosting","pt-BR":"Sites de documentos hospedados","ru":"Размещенные сайты документации","ur":"میزبان دستاویزات کی سائٹس","zh-CN":"托管文档站点"};

export function settings_plan_selfhosted_feature_sites(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
