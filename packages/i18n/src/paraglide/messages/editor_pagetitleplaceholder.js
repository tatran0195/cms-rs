import { getLocale } from '../runtime.js';

const translations = {"ar":"عنوان الصفحة","bn":"পৃষ্ঠার শিরোনাম","de":"Seitentitel","en":"Page title","es":"Título de la página","fr":"Titre de la page","hi":"पृष्ठ शीर्षक","id":"Judul halaman","pt-BR":"Título da página","ru":"Название страницы","ur":"صفحہ کا عنوان","zh-CN":"页面标题"};

export function editor_pagetitleplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
