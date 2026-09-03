import { getLocale } from '../runtime.js';

const translations = {"ar":"المحتوى","bn":"বিষয়বস্তু","de":"Inhalt","en":"Content","es":"Contenido","fr":"Contenu","hi":"सामग्री","id":"Konten","pt-BR":"Conteúdo","ru":"Содержание","ur":"مواد","zh-CN":"内容"};

export function editor_mode_content(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
