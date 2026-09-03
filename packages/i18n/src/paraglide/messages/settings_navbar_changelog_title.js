import { getLocale } from '../runtime.js';

const translations = {"ar":"إظهار رابط سجل التغييرات","bn":"চেঞ্জলগ লিঙ্ক দেখান","de":"Link zum Änderungsprotokoll anzeigen","en":"Show changelog link","es":"Mostrar enlace del registro de cambios","fr":"Afficher le lien du journal des modifications","hi":"चेंजलॉग लिंक दिखाएँ","id":"Tampilkan tautan log perubahan","pt-BR":"Mostrar link do changelog","ru":"Показать ссылку на журнал изменений","ur":"چینج لاگ لنک دکھائیں۔","zh-CN":"显示变更日志链接"};

export function settings_navbar_changelog_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
