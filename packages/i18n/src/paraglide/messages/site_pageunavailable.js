import { getLocale } from '../runtime.js';

const translations = {"ar":"هذه الصفحة غير متاحة.","bn":"এই পৃষ্ঠাটি উপলব্ধ নয়।","de":"Diese Seite ist nicht verfügbar.","en":"This page is not available.","es":"Esta página no está disponible.","fr":"Cette page n'est pas disponible.","hi":"यह पेज उपलब्ध नहीं है.","id":"Halaman ini tidak tersedia.","pt-BR":"Esta página não está disponível.","ru":"Эта страница недоступна.","ur":"یہ صفحہ دستیاب نہیں ہے۔","zh-CN":"该页面不可用。"};

export function site_pageunavailable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
