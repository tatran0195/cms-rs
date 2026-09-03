import { getLocale } from '../runtime.js';

const translations = {"ar":"تفويض المزوّد","bn":"প্রদানকারীকে অনুমোদন করুন","de":"Autorisieren Sie den Anbieter","en":"Authorize the provider","es":"Autorizar al proveedor","fr":"Autoriser le fournisseur","hi":"प्रदाता को अधिकृत करें","id":"Otorisasi penyedia","pt-BR":"Autorizar o provedor","ru":"Авторизовать провайдера","ur":"فراہم کنندہ کو اختیار دیں۔","zh-CN":"授权提供商"};

export function settings_git_workflow_authorizetitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
