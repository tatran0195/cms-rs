import { getLocale } from '../runtime.js';

const translations = {"ar":"مسار المحتوى","bn":"বিষয়বস্তুর পথ","de":"Inhaltspfad","en":"Content path","es":"Ruta de contenido","fr":"Chemin du contenu","hi":"सामग्री पथ","id":"Jalur konten","pt-BR":"Caminho do conteúdo","ru":"Путь к содержимому","ur":"مواد کا راستہ","zh-CN":"内容路径"};

export function settings_git_contentpath(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
