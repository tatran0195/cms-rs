import { getLocale } from '../runtime.js';

const translations = {"ar":"تم حذف اللغة","bn":"ভাষা মুছে ফেলা হয়েছে","de":"Sprache gelöscht","en":"Language deleted","es":"Idioma eliminado","fr":"Langue supprimée","hi":"भाषा हटा दी गई","id":"Bahasa dihapus","pt-BR":"Idioma excluído","ru":"Язык удален","ur":"زبان حذف کر دی گئی۔","zh-CN":"语言已删除"};

export function settings_languages_deleted(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
