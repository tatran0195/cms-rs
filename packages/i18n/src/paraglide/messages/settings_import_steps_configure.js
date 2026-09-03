import { getLocale } from '../runtime.js';

const translations = {"ar":"الإعداد","bn":"কনফিগার করুন","de":"Konfigurieren","en":"Configure","es":"Configurar","fr":"Configurer","hi":"कॉन्फ़िगर करें","id":"Konfigurasikan","pt-BR":"Configurar","ru":"Настроить","ur":"ترتیب دیں۔","zh-CN":"配置"};

export function settings_import_steps_configure(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
