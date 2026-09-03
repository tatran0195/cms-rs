import { getLocale } from '../runtime.js';

const translations = {"ar":"عند إنشاء مشروع في مساحة العمل.","bn":"যখন কর্মক্ষেত্রে একটি প্রকল্প তৈরি করা হয়।","de":"Wenn ein Projekt im Arbeitsbereich erstellt wird.","en":"When a project is created in the workspace.","es":"Cuando se crea un proyecto en el espacio de trabajo.","fr":"Lorsqu'un projet est créé dans l'espace de travail.","hi":"जब कार्यक्षेत्र में कोई प्रोजेक्ट बनाया जाता है.","id":"Saat proyek dibuat di ruang kerja.","pt-BR":"Quando um projeto é criado no espaço de trabalho.","ru":"Когда проект создается в рабочей области.","ur":"جب ورک اسپیس میں کوئی پروجیکٹ بنایا جاتا ہے۔","zh-CN":"当在工作区中创建项目时。"};

export function settings_notifications_projectnew_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
