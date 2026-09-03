import { getLocale } from '../runtime.js';

const translations = {"ar":"استبدال","bn":"প্রতিস্থাপন করুন","de":"Ersetzen","en":"Replace","es":"Reemplazar","fr":"Remplacer","hi":"बदलें","id":"Ganti","pt-BR":"Substituir","ru":"Заменить","ur":"بدل دیں۔","zh-CN":"更换"};

export function editor_ai_replace(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
