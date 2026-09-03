import { getLocale } from '../runtime.js';

const translations = {"ar":"نمط القراءة","bn":"পড়ার স্টাইল","de":"Lesestil","en":"Reading style","es":"estilo de lectura","fr":"Style de lecture","hi":"पढ़ने की शैली","id":"Gaya membaca","pt-BR":"Estilo de leitura","ru":"Стиль чтения","ur":"پڑھنے کا انداز","zh-CN":"阅读风格"};

export function settings_typography_preset_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
