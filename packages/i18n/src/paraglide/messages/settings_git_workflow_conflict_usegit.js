import { getLocale } from '../runtime.js';

const translations = {"ar":"استخدام Git","bn":"গিট ব্যবহার করুন","de":"Verwenden Sie Git","en":"Use Git","es":"Usa Git","fr":"Utiliser Git","hi":"गिट का प्रयोग करें","id":"Gunakan Git","pt-BR":"Usar Git","ru":"Используйте Git","ur":"Git استعمال کریں۔","zh-CN":"使用 Git"};

export function settings_git_workflow_conflict_usegit(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
