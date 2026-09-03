import { getLocale } from '../runtime.js';

const translations = {"ar":"معرض السمات","bn":"থিম গ্যালারি","de":"Themengalerie","en":"Theme gallery","es":"Galería temática","fr":"Galerie thématique","hi":"थीम गैलरी","id":"Galeri tema","pt-BR":"Galeria temática","ru":"Галерея тем","ur":"تھیم گیلری","zh-CN":"主题画廊"};

export function settings_theme_gallery(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
