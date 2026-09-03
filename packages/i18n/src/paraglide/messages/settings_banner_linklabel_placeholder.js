import { getLocale } from '../runtime.js';

const translations = {"ar":"اقرأ سجلّ التغييرات ←","bn":"চেঞ্জলগ পড়ুন →","de":"Lesen Sie das Änderungsprotokoll →","en":"Read the changelog →","es":"Leer el registro de cambios →","fr":"Lire le journal des modifications →","hi":"चेंजलॉग पढ़ें →","id":"Baca log perubahan →","pt-BR":"Leia o changelog →","ru":"Читать список изменений →","ur":"چینج لاگ → پڑھیں","zh-CN":"阅读变更日志 →"};

export function settings_banner_linklabel_placeholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
