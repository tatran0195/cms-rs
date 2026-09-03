import { getLocale } from '../runtime.js';

const translations = {"ar":"تسجيل دخول جديد إلى حسابك في نيبليف","bn":"New sign-in to your Nibleaf account","de":"New sign-in to your Nibleaf account","en":"New sign-in to your Nibleaf account","es":"New sign-in to your Nibleaf account","fr":"New sign-in to your Nibleaf account","hi":"New sign-in to your Nibleaf account","id":"New sign-in to your Nibleaf account","pt-BR":"New sign-in to your Nibleaf account","ru":"New sign-in to your Nibleaf account","ur":"New sign-in to your Nibleaf account","zh-CN":"New sign-in to your Nibleaf account"};

export function email_newsignin_subject(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
