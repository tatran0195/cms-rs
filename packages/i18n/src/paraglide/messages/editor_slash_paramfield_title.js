import { getLocale } from '../runtime.js';

const translations = {"ar":"حقل معامل","bn":"পরম ক্ষেত্র","de":"Param-Feld","en":"Param field","es":"campo de parámetros","fr":"Champ de paramètres","hi":"परम क्षेत्र","id":"bidang param","pt-BR":"Campo de parâmetro","ru":"Поле параметров","ur":"پرم میدان","zh-CN":"参数字段"};

export function editor_slash_paramfield_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
