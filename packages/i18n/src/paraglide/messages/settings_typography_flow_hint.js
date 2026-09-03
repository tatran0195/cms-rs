import { getLocale } from '../runtime.js';

const translations = {"ar":"المسافة بين الفقرات والعناوين والقوائم والكتل الأخرى.","bn":"অনুচ্ছেদ, শিরোনাম, তালিকা এবং অন্যান্য ব্লকের মধ্যে স্থান।","de":"Abstand zwischen Absätzen, Überschriften, Listen und anderen Blöcken.","en":"Space between paragraphs, headings, lists, and other blocks.","es":"Espacio entre párrafos, títulos, listas y otros bloques.","fr":"Espace entre les paragraphes, les titres, les listes et autres blocs.","hi":"अनुच्छेदों, शीर्षकों, सूचियों और अन्य ब्लॉकों के बीच का स्थान।","id":"Spasi antar paragraf, judul, daftar, dan blok lainnya.","pt-BR":"Espaço entre parágrafos, títulos, listas e outros blocos.","ru":"Пространство между абзацами, заголовками, списками и другими блоками.","ur":"پیراگراف، عنوانات، فہرستوں اور دیگر بلاکس کے درمیان جگہ۔","zh-CN":"段落、标题、列表和其他块之间的空间。"};

export function settings_typography_flow_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
