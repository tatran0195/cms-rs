import { getLocale } from '../runtime.js';

const translations = {"ar":"كتلة إعلان بارزة.","bn":"একটি বিশিষ্ট ঘোষণা ব্লক.","de":"Ein prominenter Ankündigungsblock.","en":"A prominent announcement block.","es":"Un bloque de anuncios destacado.","fr":"Un bloc d'annonce bien visible.","hi":"एक प्रमुख घोषणा ब्लॉक.","id":"Blok pengumuman yang menonjol.","pt-BR":"Um bloco de anúncio proeminente.","ru":"Яркий блок объявлений.","ur":"ایک نمایاں اعلان بلاک۔","zh-CN":"一个显着的公告块。"};

export function editor_slash_banner_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
