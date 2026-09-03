import { getLocale } from '../runtime.js';

const translations = {"ar":"تم الحل","bn":"সমাধান করা হয়েছে","de":"Gelöst","en":"Resolved","es":"Resuelto","fr":"Résolu","hi":"सुलझ गया","id":"Terselesaikan","pt-BR":"Resolvido","ru":"Решено","ur":"حل ہو گیا۔","zh-CN":"已解决"};

export function editor_comments_resolved(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
