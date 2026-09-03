import { getLocale } from '../runtime.js';

const translations = {"ar":"إعدادات الموقع","bn":"সাইট সেটিংস","de":"Site-Einstellungen","en":"Site settings","es":"Configuración del sitio","fr":"Paramètres du site","hi":"साइट सेटिंग","id":"Pengaturan situs","pt-BR":"Configurações do site","ru":"Настройки сайта","ur":"سائٹ کی ترتیبات","zh-CN":"站点设置"};

export function editor_config_heading(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
