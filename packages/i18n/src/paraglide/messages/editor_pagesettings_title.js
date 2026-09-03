import { getLocale } from '../runtime.js';

const translations = {"ar":"إعدادات الصفحة","bn":"পৃষ্ঠা সেটিংস","de":"Seiteneinstellungen","en":"Page settings","es":"Configuración de página","fr":"Paramètres des pages","hi":"पेज सेटिंग","id":"Pengaturan halaman","pt-BR":"Configurações da página","ru":"Настройки страницы","ur":"صفحہ کی ترتیبات","zh-CN":"页面设置"};

export function editor_pagesettings_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
