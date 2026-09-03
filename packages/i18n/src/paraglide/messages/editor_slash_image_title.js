import { getLocale } from '../runtime.js';

const translations = {"ar":"صورة","bn":"ছবি","de":"Bild","en":"Image","es":"Imagen","fr":"Images","hi":"छवि","id":"Gambar","pt-BR":"Imagem","ru":"Изображение","ur":"تصویر","zh-CN":"图片"};

export function editor_slash_image_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
