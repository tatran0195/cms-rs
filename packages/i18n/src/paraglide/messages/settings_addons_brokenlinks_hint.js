import { getLocale } from '../runtime.js';

const translations = {"ar":"افحص الروابط الداخلية أثناء النشر لاكتشاف المسارات القديمة مبكرًا.","bn":"প্রকাশের সময় অভ্যন্তরীণ লিঙ্কগুলি পরীক্ষা করুন যাতে বাসি পথগুলি তাড়াতাড়ি ধরা পড়ে৷","de":"Überprüfen Sie interne Links während der Veröffentlichung, damit veraltete Pfade frühzeitig erkannt werden.","en":"Check internal links during publish so stale paths are caught early.","es":"Verifique los enlaces internos durante la publicación para detectar las rutas obsoletas a tiempo.","fr":"Vérifiez les liens internes lors de la publication afin que les chemins obsolètes soient détectés tôt.","hi":"प्रकाशन के दौरान आंतरिक लिंक की जाँच करें ताकि पुराने रास्ते जल्दी पकड़ में आ सकें।","id":"Periksa tautan internal selama publikasi sehingga jalur usang dapat diketahui lebih awal.","pt-BR":"Verifique os links internos durante a publicação para que caminhos obsoletos sejam detectados antecipadamente.","ru":"Проверяйте внутренние ссылки во время публикации, чтобы заранее обнаружить устаревшие пути.","ur":"اشاعت کے دوران اندرونی روابط چیک کریں تاکہ باسی راستے جلد پکڑے جائیں۔","zh-CN":"在发布期间检查内部链接，以便尽早发现过时的路径。"};

export function settings_addons_brokenlinks_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
