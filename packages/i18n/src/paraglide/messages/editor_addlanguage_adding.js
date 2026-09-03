import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ الإضافة…","bn":"যোগ করা হচ্ছে...","de":"Hinzufügen…","en":"Adding…","es":"Añadiendo…","fr":"Ajout…","hi":"जोड़ा जा रहा है...","id":"Menambahkan…","pt-BR":"Adicionando…","ru":"Добавление…","ur":"شامل کیا جا رہا ہے…","zh-CN":"添加..."};

export function editor_addlanguage_adding(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
