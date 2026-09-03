import { getLocale } from '../runtime.js';

const translations = {"ar":"الإعداد من إعدادات Git","bn":"গিট সেটিংসে কনফিগার করুন","de":"Konfigurieren Sie in den Git-Einstellungen","en":"Configure in Git settings","es":"Configurar en la configuración de Git","fr":"Configurer dans les paramètres Git","hi":"Git सेटिंग्स में कॉन्फ़िगर करें","id":"Konfigurasikan di pengaturan Git","pt-BR":"Configurar nas configurações do Git","ru":"Настройте в настройках Git","ur":"Git کی ترتیبات میں ترتیب دیں۔","zh-CN":"在 Git 设置中配置"};

export function settings_import_git_open(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
