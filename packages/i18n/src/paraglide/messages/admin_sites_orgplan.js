import { getLocale } from '../runtime.js';

const translations = {"ar":"{organization} · خطة {plan}","bn":"{organization} · {plan} plan","de":"{organization} · {plan} plan","en":"{organization} · {plan} plan","es":"{organization} · {plan} plan","fr":"{organization} · {plan} plan","hi":"{organization} · {plan} plan","id":"{organization} · {plan} plan","pt-BR":"{organization} · {plan} plan","ru":"{organization} · {plan} plan","ur":"{organization} · {plan} plan","zh-CN":"{organization} · {plan} plan"};

export function admin_sites_orgplan(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
