import { getLocale } from '../runtime.js';

const translations = {"ar":"اسم المتغيّر","bn":"পরিবর্তনশীল নাম","de":"Variablenname","en":"Variable name","es":"Nombre de la variable","fr":"Nom de la variable","hi":"परिवर्तनीय नाम","id":"Nama variabel","pt-BR":"Nome da variável","ru":"Имя переменной","ur":"متغیر نام","zh-CN":"变量名"};

export function settings_variables_keylabel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
