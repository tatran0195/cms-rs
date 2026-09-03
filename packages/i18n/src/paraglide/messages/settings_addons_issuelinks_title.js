import { getLocale } from '../runtime.js';

const translations = {"ar":"فتح المشاكل","bn":"ইস্যু তুলুন","de":"Bringen Sie Probleme zur Sprache","en":"Raise issues","es":"Plantear problemas","fr":"Soulever des problèmes","hi":"मुद्दे उठाएं","id":"Angkat masalah","pt-BR":"Levante questões","ru":"Поднимать проблемы","ur":"مسائل اٹھائیں","zh-CN":"提出问题"};

export function settings_addons_issuelinks_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
