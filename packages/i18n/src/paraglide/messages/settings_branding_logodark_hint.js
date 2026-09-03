import { getLocale } from '../runtime.js';

const translations = {"ar":"النسخة الداكنة من الشعار، تُستخدم في الوضع الفاتح. أدرج امتداد الملف.","bn":"লোগোর গাঢ় সংস্করণ, হালকা মোডে ব্যবহৃত। ফাইল এক্সটেনশন অন্তর্ভুক্ত করুন।","de":"Die dunkle Version des Logos, die im hellen Modus verwendet wird. Geben Sie die Dateierweiterung an.","en":"The dark version of the logo, used in light mode. Include the file extension.","es":"La versión oscura del logo, utilizada en modo claro. Incluya la extensión del archivo.","fr":"La version sombre du logo, utilisée en mode clair. Incluez l'extension du fichier.","hi":"लोगो का गहरा संस्करण, प्रकाश मोड में उपयोग किया जाता है। फ़ाइल एक्सटेंशन शामिल करें.","id":"Logo versi gelap, digunakan dalam mode terang. Sertakan ekstensi file.","pt-BR":"A versão escura do logotipo, usada no modo claro. Inclua a extensão do arquivo.","ru":"Темная версия логотипа, используемая в светлом режиме. Включите расширение файла.","ur":"لوگو کا گہرا ورژن، جو لائٹ موڈ میں استعمال ہوتا ہے۔ فائل کی توسیع شامل کریں۔","zh-CN":"徽标的深色版本，用于浅色模式。包括文件扩展名。"};

export function settings_branding_logodark_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
