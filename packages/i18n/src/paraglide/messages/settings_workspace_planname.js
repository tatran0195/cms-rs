import { getLocale } from '../runtime.js';

const translations = {"ar":"خطة {plan}","bn":"{plan} পরিকল্পনা","de":"{plan} Plan","en":"{plan} plan","es":"Plan {plan}","fr":"Forfait {plan}","hi":"{plan} योजना","id":"{plan} rencana","pt-BR":"Plano {plan}","ru":"План {plan}","ur":"{plan} منصوبہ","zh-CN":"{plan} 计划"};

export function settings_workspace_planname(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
