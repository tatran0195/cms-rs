import { getLocale } from '../runtime.js';

const translations = {"ar":"النص النائب","bn":"স্থানধারক","de":"Platzhalter","en":"Placeholder","es":"Marcador de posición","fr":"Espace réservé","hi":"प्लेसहोल्डर","id":"Penampung","pt-BR":"Espaço reservado","ru":"Заполнитель","ur":"پلیس ہولڈر","zh-CN":"占位符"};

export function settings_search_placeholder_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
