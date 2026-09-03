import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء الموقع","bn":"প্রকল্প তৈরি করুন","de":"Projekt erstellen","en":"Create project","es":"Crear proyecto","fr":"Créer un projet","hi":"प्रोजेक्ट बनाएं","id":"Buat proyek","pt-BR":"Criar projeto","ru":"Создать проект","ur":"پروجیکٹ بنائیں","zh-CN":"创建项目"};

export function newsite_create(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
