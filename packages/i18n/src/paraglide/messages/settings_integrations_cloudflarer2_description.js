import { getLocale } from '../runtime.js';

const translations = {"ar":"تخزين أصول على Cloudflare R2 بإدارة المشغّل.","bn":"Cloudflare R2-এ ইনস্ট্যান্স-পরিচালিত অ্যাসেট স্টোরেজ।","de":"Instanzverwaltete Asset-Speicherung auf Cloudflare R2.","en":"Instance-managed asset storage on Cloudflare R2.","es":"Almacenamiento de activos gestionado por instancias en Cloudflare R2.","fr":"Stockage d'actifs géré par instance sur Cloudflare R2.","hi":"Cloudflare R2 पर इंस्टेंस-प्रबंधित एसेट स्टोरेज।","id":"Penyimpanan aset yang dikelola instans di Cloudflare R2.","pt-BR":"Armazenamento de ativos gerenciado por instância no Cloudflare R2.","ru":"Инстанционное хранение активов на Cloudflare R2.","ur":"Cloudflare R2 پر انسٹنس کے زیر انتظام اثاثہ اسٹوریج۔","zh-CN":"Cloudflare R2 上由实例管理的资产存储。"};

export function settings_integrations_cloudflarer2_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
