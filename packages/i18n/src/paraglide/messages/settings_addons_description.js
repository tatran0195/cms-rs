import { getLocale } from '../runtime.js';

const translations = {"ar":"مساعدات للقراء والنشر لموقع التوثيق هذا.","bn":"এই ডক্স সাইটের জন্য পাঠক-মুখী এবং প্রকাশনা সহায়ক।","de":"Leser- und Veröffentlichungshilfen für diese Dokumentenseite.","en":"Reader-facing and publishing helpers for this docs site.","es":"Ayudantes de publicación y de cara al lector para este sitio de documentos.","fr":"Aides aux lecteurs et à la publication pour ce site de documentation.","hi":"इस डॉक्स साइट के लिए पाठक-सामना और प्रकाशन सहायक।","id":"Pembantu yang menghadap pembaca dan penerbitan untuk situs dokumen ini.","pt-BR":"Ajudantes voltados para o leitor e de publicação para este site de documentos.","ru":"Помощники по работе с читателями и публикации для этого сайта документации.","ur":"اس ڈاکس سائٹ کے لیے قارئین کا سامنا اور اشاعت کے مددگار۔","zh-CN":"此文档网站的面向读者和发布的帮助程序。"};

export function settings_addons_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
