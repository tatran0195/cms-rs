import { getLocale } from '../runtime.js';

const translations = {"ar":"تخزين أصول بإدارة المشغّل عبر Maxio.","bn":"Maxio-এর মাধ্যমে ইনস্ট্যান্স-পরিচালিত অ্যাসেট স্টোরেজ।","de":"Instanzverwaltete Asset-Speicherung mit Maxio.","en":"Instance-managed asset storage with Maxio.","es":"Almacenamiento de activos gestionado por instancias con Maxio.","fr":"Stockage d'actifs géré par instance avec Maxio.","hi":"Maxio के साथ इंस्टेंस-प्रबंधित एसेट स्टोरेज।","id":"Penyimpanan aset yang dikelola instans dengan Maxio.","pt-BR":"Armazenamento de ativos gerenciado pela instância com o Maxio.","ru":"Управляемое экземпляром хранилище ресурсов с Maxio.","ur":"Maxio کے ساتھ انسٹنس کے زیر انتظام اثاثہ اسٹوریج۔","zh-CN":"通过 Maxio 提供的实例管理资产存储。"};

export function settings_integrations_maxio_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
