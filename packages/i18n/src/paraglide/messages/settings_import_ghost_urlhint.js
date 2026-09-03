import { getLocale } from '../runtime.js';

const translations = {"ar":"يُستخدم لتنزيل صور Ghost ونسخها إلى مساحة تخزين هذا المشروع.","bn":"ভূতের ছবিগুলি ডাউনলোড করতে এবং এই প্রকল্পের স্টোরেজে কপি করতে ব্যবহৃত হয়।","de":"Wird verwendet, um Ghost-Bilder herunterzuladen und in den Speicher dieses Projekts zu kopieren.","en":"Used to download Ghost images and copy them into this project’s storage.","es":"Se utiliza para descargar imágenes de Ghost y copiarlas en el almacenamiento de este proyecto.","fr":"Utilisé pour télécharger des images Ghost et les copier dans le stockage de ce projet.","hi":"भूत छवियों को डाउनलोड करने और उन्हें इस परियोजना के भंडारण में कॉपी करने के लिए उपयोग किया जाता है।","id":"Digunakan untuk mengunduh gambar Ghost dan menyalinnya ke penyimpanan proyek ini.","pt-BR":"Usado para baixar imagens do Ghost e copiá-las para o armazenamento deste projeto.","ru":"Используется для загрузки образов Ghost и копирования их в хранилище этого проекта.","ur":"گھوسٹ امیجز کو ڈاؤن لوڈ کرنے اور انہیں اس پروجیکٹ کے اسٹوریج میں کاپی کرنے کے لیے استعمال کیا جاتا ہے۔","zh-CN":"用于下载 Ghost 映像并将其复制到该项目的存储中。"};

export function settings_import_ghost_urlhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
