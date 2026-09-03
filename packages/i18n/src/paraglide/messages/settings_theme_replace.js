import { getLocale } from '../runtime.js';

const translations = {"ar":"استبدال السمة","bn":"থিম প্রতিস্থাপন করুন","de":"Thema ersetzen","en":"Replace theme","es":"Reemplazar tema","fr":"Remplacer le thème","hi":"थीम बदलें","id":"Ganti tema","pt-BR":"Substituir tema","ru":"Заменить тему","ur":"تھیم کو تبدیل کریں۔","zh-CN":"更换主题"};

export function settings_theme_replace(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
