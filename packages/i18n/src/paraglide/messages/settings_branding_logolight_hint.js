import { getLocale } from '../runtime.js';

const translations = {"ar":"النسخة الفاتحة من الشعار، تُستخدم في الوضع الداكن. أدرج امتداد الملف.","bn":"লোগোর হালকা সংস্করণ, ডার্ক মোডে ব্যবহৃত। ফাইল এক্সটেনশন অন্তর্ভুক্ত করুন।","de":"Die helle Version des Logos, die im dunklen Modus verwendet wird. Geben Sie die Dateierweiterung an.","en":"The light version of the logo, used in dark mode. Include the file extension.","es":"La versión clara del logo, utilizada en modo oscuro. Incluya la extensión del archivo.","fr":"La version claire du logo, utilisée en mode sombre. Incluez l'extension du fichier.","hi":"लोगो का हल्का संस्करण, डार्क मोड में उपयोग किया जाता है। फ़ाइल एक्सटेंशन शामिल करें.","id":"Logo versi terang, digunakan dalam mode gelap. Sertakan ekstensi file.","pt-BR":"A versão light do logotipo, usada no modo escuro. Inclua a extensão do arquivo.","ru":"Светлая версия логотипа, используемая в темном режиме. Включите расширение файла.","ur":"لوگو کا ہلکا ورژن، جو ڈارک موڈ میں استعمال ہوتا ہے۔ فائل کی توسیع شامل کریں۔","zh-CN":"浅色版本的徽标，用于深色模式。包括文件扩展名。"};

export function settings_branding_logolight_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
