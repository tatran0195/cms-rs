import { getLocale } from '../runtime.js';

const translations = {"ar":"لغة الواجهة","bn":"ইন্টারফেস ভাষা","de":"Schnittstellensprache","en":"Interface language","es":"Idioma de la interfaz","fr":"Langue de l'interface","hi":"इंटरफ़ेस भाषा","id":"Bahasa antarmuka","pt-BR":"Idioma da interface","ru":"Язык интерфейса","ur":"انٹرفیس کی زبان","zh-CN":"界面语言"};

export function account_language(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
