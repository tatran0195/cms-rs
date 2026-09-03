import { getLocale } from '../runtime.js';

const translations = {"ar":"إعدادات اللغة","bn":"ভাষা সেটিংস","de":"Spracheinstellungen","en":"Language settings","es":"Configuración de idioma","fr":"Paramètres de langue","hi":"भाषा सेटिंग","id":"Pengaturan bahasa","pt-BR":"Configurações de idioma","ru":"Языковые настройки","ur":"زبان کی ترتیبات","zh-CN":"语言设置"};

export function editor_langsettings_settings(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
