import { getLocale } from '../runtime.js';

const translations = {"ar":"تخزين أصول متوافق مع S3 بإدارة المشغّل.","bn":"ইনস্ট্যান্স-পরিচালিত S3-সামঞ্জস্যপূর্ণ অ্যাসেট স্টোরেজ।","de":"Instanzverwaltete S3-kompatible Asset-Speicherung.","en":"Instance-managed S3-compatible asset storage.","es":"Almacenamiento de activos compatible con S3 gestionado por instancias.","fr":"Stockage d'actifs compatible S3 géré par instance.","hi":"इंस्टेंस-प्रबंधित S3-संगत एसेट स्टोरेज।","id":"Penyimpanan aset kompatibel S3 yang dikelola instans.","pt-BR":"Armazenamento de ativos compatíveis S3 gerenciado por instância.","ru":"Управляемое экземпляром S3-совместимое хранилище ресурсов.","ur":"انسٹنس کے زیر انتظام S3-مطابق اثاثہ اسٹوریج۔","zh-CN":"由实例管理的 S3 兼容资产存储。"};

export function settings_integrations_minio_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
