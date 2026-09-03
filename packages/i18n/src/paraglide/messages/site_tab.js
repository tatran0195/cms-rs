import { getLocale } from '../runtime.js';

const translations = {"ar":"علامة التبويب","bn":"ট্যাব","de":"Tab","en":"Tab","es":"Pestaña","fr":"Onglet","hi":"टैब","id":"tab","pt-BR":"Aba","ru":"Вкладка","ur":"ٹیب","zh-CN":"选项卡"};

export function site_tab(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
