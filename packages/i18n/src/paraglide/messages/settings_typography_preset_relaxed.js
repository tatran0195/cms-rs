import { getLocale } from '../runtime.js';

const translations = {"ar":"مريح","bn":"রিলাক্সড","de":"Entspannt","en":"Relaxed","es":"Relajado","fr":"Détendu","hi":"आराम से","id":"Santai","pt-BR":"Descontraído","ru":"Расслабленный","ur":"پر سکون","zh-CN":"轻松"};

export function settings_typography_preset_relaxed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
