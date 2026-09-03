import { getLocale } from '../runtime.js';

const translations = {"ar":"أكّد عنوان بريدك الإلكتروني لإكمال إعداد حساب نيبليف.","bn":"Confirm your email address to finish setting up Nibleaf.","de":"Confirm your email address to finish setting up Nibleaf.","en":"Confirm your email address to finish setting up Nibleaf.","es":"Confirm your email address to finish setting up Nibleaf.","fr":"Confirm your email address to finish setting up Nibleaf.","hi":"Confirm your email address to finish setting up Nibleaf.","id":"Confirm your email address to finish setting up Nibleaf.","pt-BR":"Confirm your email address to finish setting up Nibleaf.","ru":"Confirm your email address to finish setting up Nibleaf.","ur":"Confirm your email address to finish setting up Nibleaf.","zh-CN":"Confirm your email address to finish setting up Nibleaf."};

export function email_verifyemail_preview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
