import { getLocale } from '../runtime.js';

const translations = {"ar":"تم الإدراج.","bn":"ঢোকানো হয়েছে।","de":"Eingefügt.","en":"Inserted.","es":"Insertado.","fr":"Inséré.","hi":"डाला गया.","id":"Dimasukkan.","pt-BR":"Inserido.","ru":"Вставлен.","ur":"داخل کیا گیا۔","zh-CN":"已插入。"};

export function editor_ai_inserted(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
