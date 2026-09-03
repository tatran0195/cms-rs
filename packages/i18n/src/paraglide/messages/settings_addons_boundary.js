import { getLocale } from '../runtime.js';

const translations = {"ar":"الإضافات هي إمكانات ضمن منتج Nibleaf. تبقى اتصالات المزوّدين الخارجيين في قسم التكاملات.","bn":"অ্যাড-অন হলো Nibleaf পণ্যের সুবিধা। বাহ্যিক সেবাদাতার সংযোগ ইন্টিগ্রেশন বিভাগেই থাকে।","de":"Add-ons sind Produktfunktionen von Nibleaf. Verbindungen zu externen Anbietern bleiben unter Integrationen.","en":"Add-ons are Nibleaf product capabilities. External provider connections remain in Integrations.","es":"Los complementos son funciones del producto Nibleaf. Las conexiones con proveedores externos permanecen en Integraciones.","fr":"Les modules complémentaires sont des fonctionnalités du produit Nibleaf. Les connexions aux fournisseurs externes restent dans Intégrations.","hi":"ऐड-ऑन Nibleaf उत्पाद की क्षमताएँ हैं। बाहरी प्रदाता कनेक्शन इंटीग्रेशन में ही रहते हैं।","id":"Add-on adalah kapabilitas produk Nibleaf. Koneksi penyedia eksternal tetap berada di Integrasi.","pt-BR":"Os complementos são recursos do produto Nibleaf. As conexões com provedores externos permanecem em Integrações.","ru":"Дополнения — это функции продукта Nibleaf. Подключения к внешним поставщикам остаются в разделе «Интеграции».","ur":"ایڈ آنز Nibleaf کی مصنوعات کی صلاحیتیں ہیں۔ بیرونی فراہم کنندگان کے کنکشنز انٹیگریشنز میں ہی رہتے ہیں۔","zh-CN":"附加功能是 Nibleaf 产品能力。外部提供商连接仍在“集成”中管理。"};

export function settings_addons_boundary(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
