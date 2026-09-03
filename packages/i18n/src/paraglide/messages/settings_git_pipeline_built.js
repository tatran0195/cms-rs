import { getLocale } from '../runtime.js';

const translations = {"ar":"v{version} · الصفحات: {pages}","bn":"v{version} · পৃষ্ঠা: {pages}","de":"v{version} · Seiten: {pages}","en":"v{version} · pages: {pages}","es":"v{version} · páginas: {pages}","fr":"v{version} · pages : {pages}","hi":"v{version} · पृष्ठ: {pages}","id":"v{version} · halaman: {pages}","pt-BR":"v{version} · páginas: {pages}","ru":"v{version} · страниц: {pages}","ur":"v{version} · صفحات: {pages}","zh-CN":"v{version} · 页数：{pages}"};

export function settings_git_pipeline_built(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
