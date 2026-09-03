import { getLocale } from '../runtime.js';

const translations = {"ar":"الاستيراد إلى الفرع","bn":"শাখায় আমদানি করুন","de":"In Zweig importieren","en":"Import into branch","es":"Importar a sucursal","fr":"Importer en succursale","hi":"शाखा में आयात करें","id":"Impor ke cabang","pt-BR":"Importar para filial","ru":"Импортировать в ветку","ur":"برانچ میں درآمد کریں۔","zh-CN":"导入分支"};

export function settings_git_importbranch(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
