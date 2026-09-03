import { getLocale } from '../runtime.js';

const translations = {"ar":"تخزين أصول على Amazon S3 بإدارة المشغّل.","bn":"Amazon S3-এ ইনস্ট্যান্স-পরিচালিত অ্যাসেট স্টোরেজ।","de":"Instanzverwaltete Asset-Speicherung auf Amazon S3.","en":"Instance-managed asset storage on Amazon S3.","es":"Almacenamiento de activos gestionado por instancias en Amazon S3.","fr":"Stockage d'actifs géré par instance sur Amazon S3.","hi":"Amazon S3 पर इंस्टेंस-प्रबंधित एसेट स्टोरेज।","id":"Penyimpanan aset yang dikelola instans di Amazon S3.","pt-BR":"Armazenagem de ativos gerenciados por instância na Amazon S3.","ru":"Управляемое экземпляром хранилище ресурсов в Amazon S3.","ur":"Amazon S3 پر انسٹنس کے زیر انتظام اثاثہ اسٹوریج۔","zh-CN":"Amazon S3 上由实例管理的资产存储。"};

export function settings_integrations_amazons3_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
