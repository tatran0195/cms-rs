import { getLocale } from '../runtime.js';

const translations = {"ar":"خطة {plan} · {members} أعضاء","bn":"{plan} plan · {members} members","de":"{plan} plan · {members} members","en":"{plan} plan · {members} members","es":"{plan} plan · {members} members","fr":"{plan} plan · {members} members","hi":"{plan} plan · {members} members","id":"{plan} plan · {members} members","pt-BR":"{plan} plan · {members} members","ru":"{plan} plan · {members} members","ur":"{plan} plan · {members} members","zh-CN":"{plan} plan · {members} members"};

export function admin_sites_workspacesummary(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
