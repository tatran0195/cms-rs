import { getLocale } from '../runtime.js';

const translations = {"ar":"البيانات الوصفية التي يستخدمها التنقّل والموقع المنشور.","bn":"নেভিগেশন এবং প্রকাশিত সাইট দ্বারা ব্যবহৃত মেটাডেটা।","de":"Metadaten, die von der Navigation und der veröffentlichten Website verwendet werden.","en":"Metadata used by the navigation and the published site.","es":"Metadatos utilizados por la navegación y el sitio publicado.","fr":"Métadonnées utilisées par la navigation et le site publié.","hi":"नेविगेशन और प्रकाशित साइट द्वारा उपयोग किया जाने वाला मेटाडेटा।","id":"Metadata yang digunakan oleh navigasi dan situs yang dipublikasikan.","pt-BR":"Metadados utilizados pela navegação e pelo site publicado.","ru":"Метаданные, используемые навигацией и опубликованным сайтом.","ur":"نیویگیشن اور شائع شدہ سائٹ کے ذریعہ استعمال کردہ میٹا ڈیٹا۔","zh-CN":"导航和发布的网站使用的元数据。"};

export function editor_pagesettings_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
