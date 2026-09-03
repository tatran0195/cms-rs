import { getLocale } from '../runtime.js';

const translations = {"ar":"تخزين واستعلامات مُدارة لتحليلات المنتج.","bn":"ম্যানেজড প্রোডাক্ট অ্যানালিটিক্স স্টোরেজ এবং ক্যোয়ারী ।","de":"Verwaltete Speicherung und Abfragen von Produktanalysen.","en":"Managed product analytics storage and queries.","es":"Almacenamiento y consultas gestionados para analítica de producto.","fr":"Stockage analytique des produits gérés et requêtes.","hi":"प्रबंधित उत्पाद विश्लेषण स्टोरेज और क्वेरी।","id":"Mengatur penyimpanan analitik produk dan kueri.","pt-BR":"Armazenamento e consultas de análise de produtos gerenciados.","ru":"Управляемое хранилище аналитики продуктов и запросы.","ur":"مینیجڈ پروڈکٹ اینالیٹکس اسٹوریج اور سوالات ۔","zh-CN":"托管的产品分析存储与查询。"};

export function settings_integrations_clickhouse_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
