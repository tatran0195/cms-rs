import { getLocale } from '../runtime.js';

const translations = {"ar":"بيانات الاعتماد","bn":"শংসাপত্র","de":"Anmeldedaten","en":"Credentials","es":"Credenciales","fr":"Pouvoirs","hi":"क्रेडेंशियल","id":"Kredensial","pt-BR":"Credenciais","ru":"Полномочия","ur":"اسناد","zh-CN":"全权证书"};

export function settings_integrations_credentials(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
