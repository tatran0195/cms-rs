import { getLocale } from '../runtime.js';

const translations = {"ar":"افتح المحرر واكتب صفحتك الأولى.","bn":"সম্পাদক খুলুন এবং আপনার প্রথম পাতা লিখুন.","de":"Öffnen Sie den Editor und schreiben Sie Ihre erste Seite.","en":"Open the editor and write your first page.","es":"Abre el editor y escribe tu primera página.","fr":"Ouvrez l'éditeur et rédigez votre première page.","hi":"संपादक खोलें और अपना पहला पृष्ठ लिखें.","id":"Buka editor dan tulis halaman pertama Anda.","pt-BR":"Abra o editor e escreva sua primeira página.","ru":"Откройте редактор и напишите свою первую страницу.","ur":"ایڈیٹر کھولیں اور اپنا پہلا صفحہ لکھیں۔","zh-CN":"打开编辑器并编写您的第一页。"};

export function overview_nudge_step1desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
