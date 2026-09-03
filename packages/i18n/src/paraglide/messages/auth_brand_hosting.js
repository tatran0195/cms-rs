import { getLocale } from '../runtime.js';

const translations = {"ar":"استضافة مُدارة لكل موقع وثائق","bn":"প্রতিটি ডক্স সাইটের জন্য পরিচালিত হোস্টিং","de":"Verwaltetes Hosting für jede Dokumentenseite","en":"Managed hosting for every docs site","es":"Alojamiento administrado para cada sitio de documentos","fr":"Hébergement géré pour chaque site de documentation","hi":"प्रत्येक दस्तावेज़ साइट के लिए प्रबंधित होस्टिंग","id":"Hosting terkelola untuk setiap situs dokumen","pt-BR":"Hospedagem gerenciada para todos os sites de documentos","ru":"Управляемый хостинг для каждого сайта документации","ur":"ہر دستاویز کی سائٹ کے لیے منظم ہوسٹنگ","zh-CN":"每个文档站点的托管托管"};

export function auth_brand_hosting(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
