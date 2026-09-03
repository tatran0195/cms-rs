import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر إنشاء الموقع","bn":"প্রকল্প তৈরি করা যায়নি","de":"Projekt konnte nicht erstellt werden","en":"Could not create project","es":"No se pudo crear el proyecto","fr":"Impossible de créer le projet","hi":"प्रोजेक्ट नहीं बनाया जा सका","id":"Tidak dapat membuat proyek","pt-BR":"Não foi possível criar o projeto","ru":"Не удалось создать проект","ur":"پروجیکٹ نہیں بنایا جا سکا","zh-CN":"无法创建项目"};

export function newsite_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
