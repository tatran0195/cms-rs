import { getLocale } from '../runtime.js';

const translations = {"ar":"البريد الإلكتروني","bn":"ইমেইল","de":"E-Mail","en":"Email","es":"Correo electrónico","fr":"Courriel","hi":"ईमेल","id":"Surel","pt-BR":"E-mail","ru":"электронная почта","ur":"ای میل","zh-CN":"电子邮件"};

export function settings_members_emaillabel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
