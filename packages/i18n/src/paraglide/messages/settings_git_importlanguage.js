import { getLocale } from '../runtime.js';

const translations = {"ar":"الاستيراد إلى اللغة","bn":"ভাষাতে আমদানি করুন","de":"In die Sprache importieren","en":"Import into language","es":"Importar al idioma","fr":"Importer dans la langue","hi":"भाषा में आयात करें","id":"Impor ke dalam bahasa","pt-BR":"Importar para o idioma","ru":"Импортировать в язык","ur":"زبان میں درآمد کریں۔","zh-CN":"导入到语言中"};

export function settings_git_importlanguage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
