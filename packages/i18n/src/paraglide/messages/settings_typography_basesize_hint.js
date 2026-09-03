import { getLocale } from '../runtime.js';

const translations = {"ar":"حجم القراءة للنص الأساسي في موقعك المنشور.","bn":"আপনার প্রকাশিত সাইটে বডি টেক্সটের রিডিং সাইজ।","de":"Lesegröße für den Fließtext auf Ihrer veröffentlichten Website.","en":"Reading size for body text on your published site.","es":"Tamaño de lectura del cuerpo del texto en su sitio publicado.","fr":"Taille de lecture du corps du texte sur votre site publié.","hi":"आपकी प्रकाशित साइट पर मुख्य पाठ के लिए पढ़ने का आकार।","id":"Ukuran membaca untuk teks isi di situs yang Anda terbitkan.","pt-BR":"Tamanho de leitura do corpo do texto em seu site publicado.","ru":"Размер чтения основного текста на опубликованном сайте.","ur":"آپ کی شائع شدہ سائٹ پر باڈی ٹیکسٹ کے لیے پڑھنے کا سائز۔","zh-CN":"您发布的网站上正文的阅读大小。"};

export function settings_typography_basesize_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
