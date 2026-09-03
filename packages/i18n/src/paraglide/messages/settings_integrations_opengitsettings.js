import { getLocale } from '../runtime.js';

const translations = {"ar":"فتح إعدادات Git","bn":"গিট সেটিংস খুলুন","de":"Git-Einstellungen","en":"Open Git settings","es":"Abrir configuración de Git","fr":"Ouvrir les paramètres Git","hi":"ओपन गिट सेटिंग्स","id":"Buka pengaturan Git","pt-BR":"Abrir a configuração do Git","ru":"Настройки Open Git","ur":"Git سیٹنگز کھولیں","zh-CN":"打开 Git 设置"};

export function settings_integrations_opengitsettings(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
