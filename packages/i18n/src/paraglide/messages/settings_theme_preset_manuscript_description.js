import { getLocale } from '../runtime.js';

const translations = {"ar":"تخطيط تحريري مع فهرس أفقي للفصول وسطح قراءة يشبه الورق وعرض مريح للمقالات الطويلة.","bn":"An editorial layout with a chapter deck, a paper-like reading surface, and a focused long-form measure.","de":"An editorial layout with a chapter deck, a paper-like reading surface, and a focused long-form measure.","en":"An editorial layout with a chapter deck, a paper-like reading surface, and a focused long-form measure.","es":"An editorial layout with a chapter deck, a paper-like reading surface, and a focused long-form measure.","fr":"An editorial layout with a chapter deck, a paper-like reading surface, and a focused long-form measure.","hi":"An editorial layout with a chapter deck, a paper-like reading surface, and a focused long-form measure.","id":"An editorial layout with a chapter deck, a paper-like reading surface, and a focused long-form measure.","pt-BR":"An editorial layout with a chapter deck, a paper-like reading surface, and a focused long-form measure.","ru":"An editorial layout with a chapter deck, a paper-like reading surface, and a focused long-form measure.","ur":"An editorial layout with a chapter deck, a paper-like reading surface, and a focused long-form measure.","zh-CN":"An editorial layout with a chapter deck, a paper-like reading surface, and a focused long-form measure."};

export function settings_theme_preset_manuscript_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
