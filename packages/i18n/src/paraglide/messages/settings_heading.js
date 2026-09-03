import { getLocale } from '../runtime.js';

const translations = {"ar":"إعدادات الموقع","bn":"সাইট কনফিগারেশন","de":"Site-Konfigurationen","en":"Site configurations","es":"Configuraciones del sitio","fr":"Configurations de sites","hi":"साइट विन्यास","id":"Konfigurasi situs","pt-BR":"Configurações do site","ru":"Конфигурации сайта","ur":"سائٹ کی تشکیلات","zh-CN":"站点配置"};

export function settings_heading(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
