import { getLocale } from '../runtime.js';

const translations = {"ar":"إعداد","bn":"কনফিগার","de":"Konfigurieren","en":"Configure","es":"Configurar","fr":"Configuration","hi":"कॉन्फ़िगर करना","id":"Atur","pt-BR":"Configurar","ru":"конфигурировать","ur":"تشکیل دیں","zh-CN":"配置"};

export function settings_integrations_configure(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
