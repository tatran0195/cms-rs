import { getLocale } from '../runtime.js';

const translations = {"ar":"تم","bn":"চেক করুন","de":"Überprüfen","en":"Check","es":"comprobar","fr":"Vérifier","hi":"जांचें","id":"Periksa","pt-BR":"Verifique","ru":"Проверить","ur":"چیک کریں۔","zh-CN":"检查"};

export function editor_slash_check_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
