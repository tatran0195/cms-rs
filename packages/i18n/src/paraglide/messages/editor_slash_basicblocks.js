import { getLocale } from '../runtime.js';

const translations = {"ar":"الكتل الأساسية","bn":"মৌলিক ব্লক","de":"Grundblöcke","en":"Basic blocks","es":"Bloques básicos","fr":"Blocs de base","hi":"बुनियादी ब्लॉक","id":"Blok dasar","pt-BR":"Blocos básicos","ru":"Базовые блоки","ur":"بنیادی بلاکس","zh-CN":"基本块"};

export function editor_slash_basicblocks(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
