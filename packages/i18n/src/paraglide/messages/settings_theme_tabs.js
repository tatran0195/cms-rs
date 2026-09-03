import { getLocale } from '../runtime.js';

const translations = {"ar":"التبويبات","bn":"ট্যাব","de":"Tabs","en":"Tabs","es":"Pestañas","fr":"Onglets","hi":"टैब्स","id":"tab","pt-BR":"Guias","ru":"Вкладки","ur":"ٹیبز","zh-CN":"选项卡"};

export function settings_theme_tabs(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
