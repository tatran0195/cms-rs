import { getLocale } from '../runtime.js';

const translations = {"ar":"تمت ترقية «{name}» إلى main","bn":"\"{name}\"কে প্রধানে উন্নীত করা হয়েছে৷","de":"„{name}“ in die Hauptdatei hochgestuft","en":"Promoted “{name}” into main","es":"Promovió \"{name}\" a principal","fr":"Promu « {name} » dans le menu principal","hi":"\"{name}\" को मुख्य रूप से प्रचारित किया गया","id":"Mempromosikan “{name}” menjadi utama","pt-BR":"Promovido “{name}” para principal","ru":"«{name}» повышен до основного.","ur":"\"{name}\" کو مین میں ترقی دی گئی۔","zh-CN":"将“{name}”提升到主干"};

export function editor_branch_merged(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
