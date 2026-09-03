import { getLocale } from '../runtime.js';

const translations = {"ar":"مسار النشر","bn":"প্রকাশিত পথ","de":"Veröffentlichter Pfad","en":"Published path","es":"Ruta publicada","fr":"Chemin publié","hi":"प्रकाशित पथ","id":"Jalur yang dipublikasikan","pt-BR":"Caminho publicado","ru":"Опубликованный путь","ur":"شائع شدہ راستہ","zh-CN":"发布路径"};

export function settings_openapi_path(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
