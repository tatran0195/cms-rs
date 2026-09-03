import { getLocale } from '../runtime.js';

const translations = {"ar":"يُستخدم للفقرات والقوائم ومعظم نصوص القراءة.","bn":"অনুচ্ছেদ, তালিকা এবং সর্বাধিক পাঠ্য পাঠের জন্য ব্যবহৃত হয়।","de":"Wird für Absätze, Listen und die meisten Lesetexte verwendet.","en":"Used for paragraphs, lists, and most reading text.","es":"Se utiliza para párrafos, listas y la mayoría de textos de lectura.","fr":"Utilisé pour les paragraphes, les listes et la plupart des textes à lire.","hi":"अनुच्छेदों, सूचियों और सर्वाधिक पढ़े जाने वाले पाठ के लिए उपयोग किया जाता है।","id":"Digunakan untuk paragraf, daftar, dan sebagian besar teks bacaan.","pt-BR":"Usado para parágrafos, listas e a maioria dos textos de leitura.","ru":"Используется для абзацев, списков и большинства читаемого текста.","ur":"پیراگراف، فہرستوں اور سب سے زیادہ پڑھنے والے متن کے لیے استعمال کیا جاتا ہے۔","zh-CN":"用于段落、列表和大多数阅读文本。"};

export function settings_typography_bodyfont_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
