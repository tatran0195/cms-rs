import { getLocale } from '../runtime.js';

const translations = {"ar":"تمت إضافة المخطط التفصيلي.","bn":"রূপরেখা যোগ করা হয়েছে।","de":"Gliederung hinzugefügt.","en":"Outline added.","es":"Se agregó el esquema.","fr":"Aperçu ajouté.","hi":"रूपरेखा जोड़ी गई.","id":"Garis besar ditambahkan.","pt-BR":"Esboço adicionado.","ru":"Схема добавлена.","ur":"آؤٹ لائن شامل کی گئی۔","zh-CN":"添加了大纲。"};

export function editor_ai_outlineadded(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
