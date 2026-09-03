import { getLocale } from '../runtime.js';

const translations = {"ar":"نظرة عامة موجزة عن المشروع. تُستخدم لتحسين محركات البحث والإجابات.","bn":"প্রকল্পের সংক্ষিপ্ত বিবরণ। SEO এবং AEO-এর জন্য ব্যবহৃত।","de":"Kurzer Überblick über das Projekt. Wird für SEO und AEO verwendet.","en":"Brief overview of the project. Used for SEO and AEO.","es":"Breve descripción del proyecto. Se utiliza para SEO y AEO.","fr":"Bref aperçu du projet. Utilisé pour SEO et AEO.","hi":"परियोजना का संक्षिप्त अवलोकन. SEO और AEO के लिए उपयोग किया जाता है।","id":"Ikhtisar singkat proyek ini. Digunakan untuk SEO dan AEO.","pt-BR":"Breve visão geral do projeto. Usado para SEO e AEO.","ru":"Краткий обзор проекта. Используется для SEO и AEO.","ur":"منصوبے کا مختصر جائزہ۔ SEO اور AEO کے لیے استعمال کیا جاتا ہے۔","zh-CN":"该项目的简要概述。用于 SEO 和 AEO。"};

export function settings_general_description_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
