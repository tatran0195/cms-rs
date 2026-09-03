import { getLocale } from '../runtime.js';

const translations = {"ar":"إدراج كتلة","bn":"ব্লক ঢোকান","de":"Block einfügen","en":"Insert block","es":"Insertar bloque","fr":"Insérer un bloc","hi":"ब्लॉक डालें","id":"Sisipkan blok","pt-BR":"Inserir bloco","ru":"Вставить блок","ur":"بلاک داخل کریں۔","zh-CN":"插入块"};

export function editor_insertblock(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
