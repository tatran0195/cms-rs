import { getLocale } from '../runtime.js';

const translations = {"ar":"تخزين أصول على Backblaze B2 بإدارة المشغّل.","bn":"Backblaze B2-এ ইনস্ট্যান্স-ম্যানেজড অ্যাসেট স্টোরেজ ।","de":"Instanzverwaltete Asset-Speicherung auf Backblaze B2.","en":"Instance-managed asset storage on Backblaze B2.","es":"Almacenamiento de activos gestionado por instancias en Backblaze B2.","fr":"Stockage d'actifs géré par instance sur Backblaze B2.","hi":"Backblaze B2 पर इंस्टेंस-प्रबंधित एसेट स्टोरेज।","id":"Penyimpanan aset yang dikelola instans di Backblaze B2.","pt-BR":"Armazenamento de ativos gerenciado pela instância no Backblaze B2.","ru":"Инстанционное хранение активов на Backblaze B2.","ur":"Backblaze B2 پر انسٹنس کے زیر انتظام اثاثہ اسٹوریج۔","zh-CN":"Backblaze B2 上由实例管理的资产存储。"};

export function settings_integrations_backblazeb2_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
