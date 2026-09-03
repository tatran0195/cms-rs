import { getLocale } from '../runtime.js';

const translations = {"ar":"تفويض GitHub","bn":"অনুমোদন করুন GitHub","de":"Autorisieren Sie GitHub","en":"Authorize GitHub","es":"Autorizar GitHub","fr":"Autoriser GitHub","hi":"अधिकृत करें GitHub","id":"Otorisasi GitHub","pt-BR":"Autorizar GitHub","ru":"Авторизовать GitHub","ur":"اجازت دیں GitHub","zh-CN":"授权GitHub"};

export function settings_git_workflow_authorize(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
