import { getLocale } from '../runtime.js';

const translations = {"ar":"الحجم الأساسي","bn":"বেস আকার","de":"Grundgröße","en":"Base size","es":"Tamaño básico","fr":"Taille du socle","hi":"आधार आकार","id":"Ukuran dasar","pt-BR":"Tamanho base","ru":"Базовый размер","ur":"بیس سائز","zh-CN":"底座尺寸"};

export function settings_typography_basesize_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
