import { getLocale } from '../runtime.js';

const translations = {"ar":"التحذير","bn":"সতর্কতা","de":"Warnung","en":"Warning","es":"Advertencia","fr":"Avertissement","hi":"चेतावनी","id":"Peringatan","pt-BR":"Aviso","ru":"Предупреждение","ur":"وارننگ","zh-CN":"警告"};

export function settings_theme_color_warning(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
