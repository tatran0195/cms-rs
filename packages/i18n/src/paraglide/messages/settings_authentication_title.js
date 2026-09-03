import { getLocale } from '../runtime.js';

const translations = {"ar":"المصادقة","bn":"প্রমাণীকরণ","de":"Authentifizierung","en":"Authentication","es":"Autenticación","fr":"Authentification","hi":"प्रमाणीकरण","id":"Otentikasi","pt-BR":"Autenticação","ru":"Аутентификация","ur":"تصدیق","zh-CN":"认证"};

export function settings_authentication_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
