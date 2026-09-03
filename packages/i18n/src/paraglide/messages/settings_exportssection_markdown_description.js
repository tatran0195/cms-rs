import { getLocale } from '../runtime.js';

const translations = {"ar":"كل صفحة عبر جميع اللغات والإصدارات، كملفات Markdown خام.","bn":"সমস্ত ভাষা এবং সংস্করণ জুড়ে প্রতিটি পৃষ্ঠা, প্লেইন Markdown ফাইল হিসাবে।","de":"Jede Seite in allen Sprachen und Versionen als einfache Markdown-Dateien.","en":"Every page across all languages and versions, as plain Markdown files.","es":"Cada página en todos los idiomas y versiones, como archivos Markdown sin formato.","fr":"Chaque page dans toutes les langues et versions, sous forme de simples fichiers Markdown.","hi":"सभी भाषाओं और संस्करणों में प्रत्येक पृष्ठ, सादे Markdown फ़ाइलों के रूप में।","id":"Setiap halaman dalam semua bahasa dan versi, sebagai file Markdown biasa.","pt-BR":"Todas as páginas em todos os idiomas e versões, como arquivos Markdown simples.","ru":"Каждая страница на всех языках и версиях в виде простых файлов Markdown.","ur":"تمام زبانوں اور ورژنز میں ہر صفحہ، سادہ Markdown فائلوں کے طور پر۔","zh-CN":"所有语言和版本的每个页面，作为普通 Markdown 文件。"};

export function settings_exportssection_markdown_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
