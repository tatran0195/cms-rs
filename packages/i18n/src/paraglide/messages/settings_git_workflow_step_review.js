import { getLocale } from '../runtime.js';

const translations = {"ar":"المراجعة","bn":"পর্যালোচনা","de":"Rezension","en":"Review","es":"Revisión","fr":"Examen","hi":"समीक्षा","id":"Ulasan","pt-BR":"Revisão","ru":"Обзор","ur":"جائزہ لیں","zh-CN":"评论"};

export function settings_git_workflow_step_review(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
