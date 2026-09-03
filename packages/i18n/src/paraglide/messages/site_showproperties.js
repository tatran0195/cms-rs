import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض الخصائص","bn":"বৈশিষ্ট্য দেখান","de":"Eigenschaften anzeigen","en":"Show properties","es":"Mostrar propiedades","fr":"Afficher les propriétés","hi":"गुण दिखाएं","id":"Tampilkan properti","pt-BR":"Mostrar propriedades","ru":"Показать свойства","ur":"خصوصیات دکھائیں۔","zh-CN":"显示属性"};

export function site_showproperties(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
