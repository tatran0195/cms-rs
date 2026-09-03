import { getLocale } from '../runtime.js';

const translations = {"ar":"الكلمات: {words} · الأحرف: {characters}","bn":"শব্দ: {words} · অক্ষর: {characters}","de":"Wörter: {words} · Zeichen: {characters}","en":"Words: {words} · Characters: {characters}","es":"Palabras: {words} · Caracteres: {characters}","fr":"Mots : {words} · Caractères : {characters}","hi":"शब्द: {words} · अक्षर: {characters}","id":"Kata-kata: {words} · Karakter: {characters}","pt-BR":"Palavras: {words} · Caracteres: {characters}","ru":"Слова: {words} · Символы: {characters}","ur":"الفاظ: {words} · حروف: {characters}","zh-CN":"单词：{words} · 字符：{characters}"};

export function editor_wordcount(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
