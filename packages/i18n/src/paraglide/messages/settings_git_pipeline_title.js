import { getLocale } from '../runtime.js';

const translations = {"ar":"خط النشر","bn":"পাইপলাইন","de":"Pipeline","en":"Pipeline","es":"Tubería","fr":"Pipeline","hi":"पाइपलाइन","id":"Saluran pipa","pt-BR":"Gasoduto","ru":"Трубопровод","ur":"پائپ لائن","zh-CN":"管道"};

export function settings_git_pipeline_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
