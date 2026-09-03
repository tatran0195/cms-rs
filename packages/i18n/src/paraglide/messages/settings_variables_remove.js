import { getLocale } from '../runtime.js';

const translations = {"ar":"إزالة المتغيّر","bn":"পরিবর্তনশীল সরান","de":"Variable entfernen","en":"Remove variable","es":"Eliminar variable","fr":"Supprimer une variable","hi":"वेरिएबल हटाएँ","id":"Hapus variabel","pt-BR":"Remover variável","ru":"Удалить переменную","ur":"متغیر کو ہٹا دیں۔","zh-CN":"删除变量"};

export function settings_variables_remove(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
