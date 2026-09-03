import { getLocale } from '../runtime.js';

const translations = {"ar":"وجّه محركات البحث إلى الرابط الأصلي عند نشر المحتوى في أكثر من مكان.","bn":"যখন বিষয়বস্তু সিন্ডিকেট করা হয় তখন সার্চ ইঞ্জিনগুলিকে মূল URL-এ নির্দেশ করুন৷","de":"Verweisen Sie Suchmaschinen auf die ursprüngliche URL, wenn Inhalte syndiziert werden.","en":"Point search engines to the original URL when content is syndicated.","es":"Dirija los motores de búsqueda a la URL original cuando se distribuya el contenido.","fr":"Dirigez les moteurs de recherche vers l’URL d’origine lorsque le contenu est syndiqué.","hi":"सामग्री सिंडिकेट होने पर खोज इंजन को मूल URL की ओर इंगित करें।","id":"Arahkan mesin pencari ke URL asli ketika konten disindikasikan.","pt-BR":"Aponte os mecanismos de pesquisa para o URL original quando o conteúdo for distribuído.","ru":"Укажите поисковым системам исходный URL-адрес при распространении контента.","ur":"جب مواد کو سنڈیکیٹ کیا جاتا ہے تو سرچ انجنوں کو اصل URL کی طرف اشارہ کریں۔","zh-CN":"当内容联合时，将搜索引擎指向原始 URL。"};

export function editor_pagesettings_canonicalurlhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
