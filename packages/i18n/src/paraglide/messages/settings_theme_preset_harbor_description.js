import { getLocale } from '../runtime.js';

const translations = {"ar":"تخطيط مرجعي متوازن مع تنقّل ثابت وعمود للقراءة وفهرس للصفحة.","bn":"A balanced reference layout with persistent navigation, a reading column, and a page outline.","de":"A balanced reference layout with persistent navigation, a reading column, and a page outline.","en":"A balanced reference layout with persistent navigation, a reading column, and a page outline.","es":"A balanced reference layout with persistent navigation, a reading column, and a page outline.","fr":"A balanced reference layout with persistent navigation, a reading column, and a page outline.","hi":"A balanced reference layout with persistent navigation, a reading column, and a page outline.","id":"A balanced reference layout with persistent navigation, a reading column, and a page outline.","pt-BR":"A balanced reference layout with persistent navigation, a reading column, and a page outline.","ru":"A balanced reference layout with persistent navigation, a reading column, and a page outline.","ur":"A balanced reference layout with persistent navigation, a reading column, and a page outline.","zh-CN":"A balanced reference layout with persistent navigation, a reading column, and a page outline."};

export function settings_theme_preset_harbor_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
