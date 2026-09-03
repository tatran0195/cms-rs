import { getLocale } from '../runtime.js';

const translations = {"ar":"بريد المؤلف","bn":"লেখক ইমেল","de":"E-Mail des Autors","en":"Author email","es":"Correo electrónico del autor","fr":"E-mail de l'auteur","hi":"लेखक ईमेल","id":"Email penulis","pt-BR":"E-mail do autor","ru":"Адрес электронной почты автора","ur":"مصنف کا ای میل","zh-CN":"作者电子邮件"};

export function settings_git_workflow_authoremail(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
