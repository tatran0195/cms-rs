import { getLocale } from '../runtime.js';

const translations = {"ar":"مواضيع مفصولة بفواصل تظهر في المقالة ويحتفظ بها المستورد.","bn":"কমা দ্বারা পৃথক করা বিষয়গুলি নিবন্ধে দেখানো হয়েছে এবং আমদানিকারকদের দ্বারা ধরে রাখা হয়েছে৷","de":"Durch Kommas getrennte Themen werden im Artikel angezeigt und von Importeuren beibehalten.","en":"Comma-separated topics shown on the article and retained by importers.","es":"Temas separados por comas que se muestran en el artículo y que conservan los importadores.","fr":"Sujets séparés par des virgules affichés sur l'article et conservés par les importateurs.","hi":"अल्पविराम से अलग किए गए विषय लेख पर दिखाए गए हैं और आयातकों द्वारा बनाए रखे गए हैं।","id":"Topik yang dipisahkan koma ditampilkan pada artikel dan disimpan oleh importir.","pt-BR":"Tópicos separados por vírgula mostrados no artigo e retidos pelos importadores.","ru":"Темы, разделенные запятыми, показаны в статье и сохранены импортерами.","ur":"کوما سے الگ کیے گئے عنوانات مضمون پر دکھائے گئے اور درآمد کنندگان کے ذریعہ برقرار رکھے گئے۔","zh-CN":"文章中显示并由进口商保留的以逗号分隔的主题。"};

export function editor_pagesettings_tagshint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
