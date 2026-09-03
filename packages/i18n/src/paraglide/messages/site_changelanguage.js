import { getLocale } from '../runtime.js';

const translations = {"ar":"تغيير اللغة","bn":"ভাষা পরিবর্তন করুন","de":"Sprache ändern","en":"Change language","es":"Cambiar idioma","fr":"Changer de langue","hi":"भाषा बदलें","id":"Ganti bahasa","pt-BR":"Alterar idioma","ru":"Изменить язык","ur":"زبان بدلو","zh-CN":"更改语言"};

export function site_changelanguage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
