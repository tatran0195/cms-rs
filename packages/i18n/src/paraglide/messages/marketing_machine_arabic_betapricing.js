import { getLocale } from '../runtime.js';

const translations = {"ar":"سحابة Nibleaf مجانية خلال المرحلة التجريبية، ولا توجد خطة مدفوعة حاليًا.","bn":"Nibleaf Cloud is free during beta and currently has no paid plan.","de":"Nibleaf Cloud is free during beta and currently has no paid plan.","en":"Nibleaf Cloud is free during beta and currently has no paid plan.","es":"Nibleaf Cloud is free during beta and currently has no paid plan.","fr":"Nibleaf Cloud is free during beta and currently has no paid plan.","hi":"Nibleaf Cloud is free during beta and currently has no paid plan.","id":"Nibleaf Cloud is free during beta and currently has no paid plan.","pt-BR":"Nibleaf Cloud is free during beta and currently has no paid plan.","ru":"Nibleaf Cloud is free during beta and currently has no paid plan.","ur":"Nibleaf Cloud is free during beta and currently has no paid plan.","zh-CN":"Nibleaf Cloud is free during beta and currently has no paid plan."};

export function marketing_machine_arabic_betapricing(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
