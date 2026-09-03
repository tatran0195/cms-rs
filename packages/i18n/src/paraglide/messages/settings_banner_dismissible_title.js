import { getLocale } from '../runtime.js';

const translations = {"ar":"قابل للإغلاق","bn":"বাতিলযোগ্য","de":"Absetzbar","en":"Dismissible","es":"desestimable","fr":"Rejetable","hi":"खारिज करने योग्य","id":"Dapat ditutup","pt-BR":"Dismissível","ru":"Увольняемый","ur":"برخاست","zh-CN":"可驳回"};

export function settings_banner_dismissible_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
