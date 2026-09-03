import { getLocale } from '../runtime.js';

const translations = {"ar":"تم نسخ {imported} صورة إلى تخزين المشروع، وبقيت {skipped} صورة على رابط مصدرها.","bn":"প্রজেক্ট স্টোরেজে {imported} ছবি কপি করা হয়েছে; {skipped} তাদের উৎস URL এ রয়ে গেছে।","de":"{imported} Bilder in den Projektspeicher kopiert; {skipped} blieb bei ihrer Quell-URL.","en":"Copied {imported} images into project storage; {skipped} remained at their source URL.","es":"Se copiaron {imported} imágenes en el almacenamiento del proyecto; {skipped} permaneció en su URL de origen.","fr":"Images {imported} copiées dans le stockage du projet ; {skipped} est resté sur son URL source.","hi":"प्रोजेक्ट स्टोरेज में {imported} छवियों की प्रतिलिपि बनाई गई; {skipped} अपने स्रोत URL पर बने रहे।","id":"Menyalin {imported} gambar ke dalam penyimpanan proyek; {skipped} tetap menggunakan URL sumbernya.","pt-BR":"Imagens {imported} copiadas para o armazenamento do projeto; {skipped} permaneceu no URL de origem.","ru":"Скопировано {imported} изображений в хранилище проекта; {skipped} остался на исходном URL.","ur":"پراجیکٹ اسٹوریج میں {imported} تصاویر کاپی کی گئیں؛ {skipped} اپنے ماخذ URL پر رہا۔","zh-CN":"将 {imported} 图像复制到项目存储中； {skipped} 保留在其源 URL 上。"};

export function settings_import_assetsresult(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
