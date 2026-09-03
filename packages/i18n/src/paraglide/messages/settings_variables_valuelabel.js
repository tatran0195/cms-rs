import { getLocale } from '../runtime.js';

const translations = {"ar":"قيمة المتغيّر","bn":"পরিবর্তনশীল মান","de":"Variablenwert","en":"Variable value","es":"valor variable","fr":"Valeur variable","hi":"परिवर्तनीय मान","id":"Nilai variabel","pt-BR":"Valor variável","ru":"Значение переменной","ur":"متغیر قدر","zh-CN":"变量值"};

export function settings_variables_valuelabel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
