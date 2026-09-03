import { getLocale } from '../runtime.js';

const translations = {"ar":"الإصدار المنشور v{version}","bn":"v{version} প্রকাশিত","de":"Veröffentlicht v{version}","en":"Published v{version}","es":"Publicado v{version}","fr":"Publié v{version}","hi":"प्रकाशित v{version}","id":"Diterbitkan v{version}","pt-BR":"Publicado em v{version}","ru":"Опубликовано v{version}","ur":"شائع شدہ v{version}","zh-CN":"已发布 v{version}"};

export function settings_exports_workflow_publishedversion(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
