import { getLocale } from '../runtime.js';

const translations = {"ar":"سيجنال","bn":"Signal","de":"Signal","en":"Signal","es":"Signal","fr":"Signal","hi":"Signal","id":"Signal","pt-BR":"Signal","ru":"Signal","ur":"Signal","zh-CN":"Signal"};

export function settings_theme_preset_signal_name(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
