import { getLocale } from '../runtime.js';

const translations = {"ar":"الإعدادات","bn":"কনফিগারেশন","de":"Konfiguration","en":"Configuration","es":"Configuración","fr":"Paramétrage","hi":"विन्यास","id":"Konfigurasi","pt-BR":"Configuração","ru":"Настройка","ur":"ترتیبات","zh-CN":"配置"};

export function settings_integrations_configuration(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
