import { getLocale } from '../runtime.js';

const translations = {"ar":"أكّد بريدك الإلكتروني في نيبليف","bn":"Verify your Nibleaf email","de":"Verify your Nibleaf email","en":"Verify your Nibleaf email","es":"Verify your Nibleaf email","fr":"Verify your Nibleaf email","hi":"Verify your Nibleaf email","id":"Verify your Nibleaf email","pt-BR":"Verify your Nibleaf email","ru":"Verify your Nibleaf email","ur":"Verify your Nibleaf email","zh-CN":"Verify your Nibleaf email"};

export function email_verifyemail_subject(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
