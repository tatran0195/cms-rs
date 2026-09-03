import { getLocale } from '../runtime.js';

const translations = {"ar":"اسحب من","bn":"থেকে টানুন","de":"Ziehen Sie ab","en":"Pull from","es":"tirar de","fr":"Tirer de","hi":"से खींचो","id":"Tarik dari","pt-BR":"Puxar de","ru":"Вытащить из","ur":"سے کھینچنا","zh-CN":"拉自"};

export function settings_git_workflow_syncdescriptionbefore(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
