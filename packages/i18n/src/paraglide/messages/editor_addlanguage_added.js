import { getLocale } from '../runtime.js';

const translations = {"ar":"تمت إضافة {label}.","bn":"{label} যোগ করা হয়েছে।","de":"{label} hinzugefügt.","en":"Added {label}.","es":"Se agregó {label}.","fr":"Ajout de {label}.","hi":"{label} जोड़ा गया।","id":"Menambahkan {label}.","pt-BR":"Adicionado {label}.","ru":"Добавлен {label}.","ur":"شامل کیا گیا {label}۔","zh-CN":"添加了 {label}。"};

export function editor_addlanguage_added(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
