import { getLocale } from '../runtime.js';

const translations = {"ar":"كتابة التغييرات في","bn":"পরিবর্তন লিখুন","de":"Schreiben Sie Änderungen an","en":"Write changes to","es":"Escribir cambios en","fr":"Écrire les modifications dans","hi":"में परिवर्तन लिखें","id":"Tulis perubahan pada","pt-BR":"Escreva alterações em","ru":"Запишите изменения в","ur":"میں تبدیلیاں لکھیں۔","zh-CN":"将更改写入"};

export function settings_git_workflow_writeto(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
