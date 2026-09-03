import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ تفويض GitHub…","bn":"অনুমোদন করা হচ্ছে GitHub...","de":"Autorisierung von GitHub…","en":"Authorizing GitHub…","es":"Autorizando GitHub…","fr":"Autorisation de GitHub…","hi":"GitHub को अधिकृत किया जा रहा है…","id":"Mengotorisasi GitHub…","pt-BR":"Autorizando GitHub…","ru":"Авторизация GitHub…","ur":"اجازت دی جا رہی ہے GitHub…","zh-CN":"授权 GitHub..."};

export function settings_git_workflow_authorizing(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
