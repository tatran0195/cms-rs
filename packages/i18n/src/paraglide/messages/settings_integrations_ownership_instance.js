import { getLocale } from '../runtime.js';

const translations = {"ar":"نسخة Nibleaf","bn":"Nibleaf ইনস্ট্যান্স","de":"Nibleaf-Instanz","en":"Nibleaf instance","es":"Instancia de Nibleaf","fr":"instance Nibleaf","hi":"Nibleaf इंस्टेंस","id":"Instansi Nibleaf","pt-BR":"Instância do Nibleaf","ru":"Экземпляр Nibleaf","ur":"Nibleaf انسٹنس","zh-CN":"Nibleaf 实例"};

export function settings_integrations_ownership_instance(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
