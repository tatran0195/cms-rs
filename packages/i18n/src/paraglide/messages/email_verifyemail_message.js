import { getLocale } from '../runtime.js';

const translations = {"ar":"أكّد عنوان البريد الإلكتروني هذا لإكمال إعداد حسابك في نيبليف.","bn":"Confirm this email address to finish setting up your Nibleaf account.","de":"Confirm this email address to finish setting up your Nibleaf account.","en":"Confirm this email address to finish setting up your Nibleaf account.","es":"Confirm this email address to finish setting up your Nibleaf account.","fr":"Confirm this email address to finish setting up your Nibleaf account.","hi":"Confirm this email address to finish setting up your Nibleaf account.","id":"Confirm this email address to finish setting up your Nibleaf account.","pt-BR":"Confirm this email address to finish setting up your Nibleaf account.","ru":"Confirm this email address to finish setting up your Nibleaf account.","ur":"Confirm this email address to finish setting up your Nibleaf account.","zh-CN":"Confirm this email address to finish setting up your Nibleaf account."};

export function email_verifyemail_message(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
