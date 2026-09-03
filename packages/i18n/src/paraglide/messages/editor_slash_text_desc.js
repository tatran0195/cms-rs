import { getLocale } from '../runtime.js';

const translations = {"ar":"نص فقرة عادي.","bn":"সরল অনুচ্ছেদ পাঠ্য।","de":"Einfacher Absatztext.","en":"Plain paragraph text.","es":"Texto de párrafo simple.","fr":"Texte de paragraphe simple.","hi":"सादा अनुच्छेद पाठ.","id":"Teks paragraf biasa.","pt-BR":"Texto de parágrafo simples.","ru":"Простой текст абзаца.","ur":"سادہ پیراگراف کا متن۔","zh-CN":"纯段落文本。"};

export function editor_slash_text_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
