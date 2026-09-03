import { getLocale } from '../runtime.js';

const translations = {"ar":"إظهار الخيارات","bn":"অপশন দেখান","de":"Optionen anzeigen","en":"Show options","es":"Mostrar opciones","fr":"Afficher les options","hi":"विकल्प दिखाएँ","id":"Tampilkan opsi","pt-BR":"Mostrar opções","ru":"Показать параметры","ur":"اختیارات دکھائیں۔","zh-CN":"显示选项"};

export function settings_git_publicimport_show(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
