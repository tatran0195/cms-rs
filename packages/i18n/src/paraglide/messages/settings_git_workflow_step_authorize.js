import { getLocale } from '../runtime.js';

const translations = {"ar":"التفويض","bn":"অনুমোদন করুন","de":"Autorisieren","en":"Authorize","es":"Autorizar","fr":"Autoriser","hi":"अधिकृत करें","id":"Otorisasi","pt-BR":"Autorizar","ru":"Авторизовать","ur":"اختیار دینا","zh-CN":"授权"};

export function settings_git_workflow_step_authorize(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
