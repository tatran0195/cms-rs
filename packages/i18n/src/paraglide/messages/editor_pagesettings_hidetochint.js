import { getLocale } from '../runtime.js';

const translations = {"ar":"إخفاء جدول المحتويات في هذه الصفحة.","bn":"এই পৃষ্ঠায় বিষয়বস্তুর সারণী লুকান।","de":"Blenden Sie das Inhaltsverzeichnis auf dieser Seite aus.","en":"Hide the table of contents on this page.","es":"Ocultar la tabla de contenidos de esta página.","fr":"Masquer la table des matières sur cette page.","hi":"इस पृष्ठ पर विषय-सूची छिपाएँ.","id":"Sembunyikan daftar isi pada halaman ini.","pt-BR":"Oculte o índice desta página.","ru":"Скрыть оглавление на этой странице.","ur":"اس صفحہ پر مندرجات کا جدول چھپائیں۔","zh-CN":"隐藏此页面上的目录。"};

export function editor_pagesettings_hidetochint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
