import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ الإنشاء…","bn":"তৈরি করা হচ্ছে...","de":"Erstellen…","en":"Creating…","es":"Creando…","fr":"Création…","hi":"बनाया जा रहा है...","id":"Membuat…","pt-BR":"Criando…","ru":"Создание…","ur":"تخلیق ہو رہا ہے…","zh-CN":"创造……"};

export function newsite_creating(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
