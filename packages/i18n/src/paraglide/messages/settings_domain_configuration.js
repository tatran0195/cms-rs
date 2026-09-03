import { getLocale } from '../runtime.js';

const translations = {"ar":"الإعداد","bn":"কনফিগারেশন","de":"Konfiguration","en":"Configuration","es":"Configuración","fr":"Configuration","hi":"विन्यास","id":"Konfigurasi","pt-BR":"Configuração","ru":"Конфигурация","ur":"کنفیگریشن","zh-CN":"配置"};

export function settings_domain_configuration(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
