import { getLocale } from '../runtime.js';

const translations = {"ar":"يتجاوز الوصف المستخدم في محركات البحث وبطاقات المشاركة.","bn":"সার্চ ইঞ্জিন এবং সামাজিক কার্ড দ্বারা ব্যবহৃত বিবরণ ওভাররাইড করে।","de":"Überschreibt die von Suchmaschinen und Social Cards verwendete Beschreibung.","en":"Overrides the description used by search engines and social cards.","es":"Anula la descripción utilizada por los motores de búsqueda y las tarjetas sociales.","fr":"Remplace la description utilisée par les moteurs de recherche et les cartes sociales.","hi":"खोज इंजन और सोशल कार्ड द्वारा उपयोग किए गए विवरण को ओवरराइड करता है।","id":"Menggantikan deskripsi yang digunakan oleh mesin pencari dan kartu sosial.","pt-BR":"Substitui a descrição usada pelos mecanismos de pesquisa e cartões sociais.","ru":"Переопределяет описание, используемое поисковыми системами и социальными карточками.","ur":"سرچ انجنز اور سوشل کارڈز کے ذریعے استعمال کردہ تفصیل کو اوور رائیڈ کرتا ہے۔","zh-CN":"覆盖搜索引擎和社交卡使用的描述。"};

export function editor_pagesettings_metadescriptionhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
