import { getLocale } from '../runtime.js';

const translations = {"ar":"إضافة متغيّر","bn":"ভেরিয়েবল যোগ করুন","de":"Variable hinzufügen","en":"Add variable","es":"Agregar variable","fr":"Ajouter une variable","hi":"वेरिएबल जोड़ें","id":"Tambahkan variabel","pt-BR":"Adicionar variável","ru":"Добавить переменную","ur":"متغیر شامل کریں۔","zh-CN":"添加变量"};

export function settings_variables_add(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
