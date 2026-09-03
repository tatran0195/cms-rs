import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر حذف اللغة","bn":"ভাষা মুছে ফেলা যায়নি","de":"Die Sprache konnte nicht gelöscht werden","en":"Could not delete the language","es":"No se pudo eliminar el idioma","fr":"Impossible de supprimer la langue","hi":"भाषा को हटाया नहीं जा सका","id":"Tidak dapat menghapus bahasa","pt-BR":"Não foi possível excluir o idioma","ru":"Не удалось удалить язык","ur":"زبان کو حذف نہیں کیا جا سکا","zh-CN":"无法删除语言"};

export function settings_languages_deleteerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
