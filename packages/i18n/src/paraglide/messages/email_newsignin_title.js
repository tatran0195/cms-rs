import { getLocale } from '../runtime.js';

const translations = {"ar":"رُصد تسجيل دخول جديد","bn":"New sign-in detected","de":"New sign-in detected","en":"New sign-in detected","es":"New sign-in detected","fr":"New sign-in detected","hi":"New sign-in detected","id":"New sign-in detected","pt-BR":"New sign-in detected","ru":"New sign-in detected","ur":"New sign-in detected","zh-CN":"New sign-in detected"};

export function email_newsignin_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
