import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض","bn":"দেখুন","de":"Ansicht","en":"View","es":"Visualización","fr":"Affichage","hi":"देखें","id":"Tilik","pt-BR":"Ver","ru":"Посмотреть","ur":"دیکھیں","zh-CN":"视图"};

export function settings_integrations_view(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
