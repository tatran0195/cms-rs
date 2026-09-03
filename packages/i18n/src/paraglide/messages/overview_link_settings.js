import { getLocale } from '../runtime.js';

const translations = {"ar":"الإعدادات","bn":"সেটিংস","de":"Einstellungen","en":"Settings","es":"Configuración","fr":"Paramètres","hi":"सेटिंग्स","id":"Pengaturan","pt-BR":"Configurações","ru":"Настройки","ur":"ترتیبات","zh-CN":"设置"};

export function overview_link_settings(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
