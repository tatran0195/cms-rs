import { getLocale } from '../runtime.js';

const translations = {"ar":"صورة المشاركة","bn":"সামাজিক চিত্র","de":"Soziales Image","en":"Social image","es":"Imagen social","fr":"Image sociale","hi":"सामाजिक छवि","id":"Citra sosial","pt-BR":"Imagem social","ru":"Социальный имидж","ur":"سماجی تصویر","zh-CN":"社会形象"};

export function editor_pagesettings_ogimage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
