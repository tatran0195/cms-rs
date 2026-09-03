import { getLocale } from '../runtime.js';

const translations = {"ar":"تم إنشاء الموقع","bn":"প্রকল্প তৈরি করা হয়েছে","de":"Projekt erstellt","en":"Project created","es":"Proyecto creado","fr":"Projet créé","hi":"प्रोजेक्ट बनाया गया","id":"Proyek dibuat","pt-BR":"Projeto criado","ru":"Проект создан","ur":"پروجیکٹ بنایا","zh-CN":"项目已创建"};

export function newsite_created(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
