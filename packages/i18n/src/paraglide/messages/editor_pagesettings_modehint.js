import { getLocale } from '../runtime.js';

const translations = {"ar":"مدى اتساع عمود المحتوى على الصفحة المنشورة.","bn":"প্রকাশিত পৃষ্ঠায় বিষয়বস্তুর কলাম কতটা প্রশস্ত।","de":"Wie breit ist die Inhaltsspalte auf der veröffentlichten Seite?","en":"How wide the content column is on the published page.","es":"Qué tan ancha es la columna de contenido en la página publicada.","fr":"Quelle est la largeur de la colonne de contenu sur la page publiée.","hi":"प्रकाशित पृष्ठ पर सामग्री कॉलम कितना विस्तृत है.","id":"Seberapa lebar kolom konten pada halaman yang dipublikasikan.","pt-BR":"Qual a largura da coluna de conteúdo na página publicada.","ru":"Насколько широк столбец контента на опубликованной странице.","ur":"شائع شدہ صفحہ پر مواد کا کالم کتنا وسیع ہے۔","zh-CN":"发布页面上内容栏的宽度。"};

export function editor_pagesettings_modehint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
