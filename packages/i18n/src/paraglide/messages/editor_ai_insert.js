import { getLocale } from '../runtime.js';

const translations = {"ar":"إدراج","bn":"ঢোকান","de":"Einfügen","en":"Insert","es":"Insertar","fr":"Insérer","hi":"सम्मिलित करें","id":"Sisipkan","pt-BR":"Inserir","ru":"Вставить","ur":"داخل کریں","zh-CN":"插入"};

export function editor_ai_insert(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
