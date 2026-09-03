import { getLocale } from '../runtime.js';

const translations = {"ar":"حذف اللغة","bn":"ভাষা মুছে দিন","de":"Sprache löschen","en":"Delete language","es":"Eliminar idioma","fr":"Supprimer la langue","hi":"भाषा हटाएँ","id":"Hapus bahasa","pt-BR":"Excluir idioma","ru":"Удалить язык","ur":"زبان کو حذف کریں۔","zh-CN":"删除语言"};

export function settings_languages_delete(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
