import { getLocale } from '../runtime.js';

const translations = {"ar":"فحص الروابط المعطلة","bn":"ভাঙা লিঙ্ক চেক","de":"Überprüfung defekter Links","en":"Broken link checks","es":"Comprobaciones de enlaces rotos","fr":"Vérifications des liens brisés","hi":"टूटे हुए लिंक की जाँच","id":"Pemeriksaan tautan rusak","pt-BR":"Verificações de links quebrados","ru":"Проверка битых ссылок","ur":"ٹوٹے ہوئے لنک چیک","zh-CN":"损坏的链接检查"};

export function settings_addons_brokenlinks_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
