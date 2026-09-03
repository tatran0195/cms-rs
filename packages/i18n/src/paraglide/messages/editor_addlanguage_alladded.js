import { getLocale } from '../runtime.js';

const translations = {"ar":"تمت إضافة جميع اللغات.","bn":"প্রতিটি ভাষা যোগ করা হয়েছে.","de":"Jede Sprache wurde hinzugefügt.","en":"Every language has been added.","es":"Se han agregado todos los idiomas.","fr":"Chaque langue a été ajoutée.","hi":"हर भाषा को जोड़ा गया है.","id":"Setiap bahasa telah ditambahkan.","pt-BR":"Cada idioma foi adicionado.","ru":"Добавлены все языки.","ur":"ہر زبان کو شامل کیا گیا ہے۔","zh-CN":"每种语言都已添加。"};

export function editor_addlanguage_alladded(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
