import { getLocale } from '../runtime.js';

const translations = {"ar":"صورة مؤطّرة مع تعليق.","bn":"একটি ক্যাপশন সহ একটি ফ্রেমযুক্ত ছবি৷","de":"Ein gerahmtes Bild mit einer Bildunterschrift.","en":"A framed image with a caption.","es":"Una imagen enmarcada con un título.","fr":"Une image encadrée avec une légende.","hi":"कैप्शन के साथ फ़्रेमयुक्त छवि.","id":"Gambar berbingkai dengan keterangan.","pt-BR":"Uma imagem emoldurada com uma legenda.","ru":"Изображение в рамке с подписью.","ur":"کیپشن کے ساتھ فریم شدہ تصویر۔","zh-CN":"带标题的加框图像。"};

export function editor_slash_frame_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
