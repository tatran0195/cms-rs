import { getLocale } from '../runtime.js';

const translations = {"ar":"الشريط الجانبي","bn":"সাইডবার","de":"Seitenleiste","en":"Sidebar","es":"Barra lateral","fr":"Barre latérale","hi":"साइडबार","id":"Bilah samping","pt-BR":"Barra lateral","ru":"Боковая панель","ur":"سائڈبار","zh-CN":"侧边栏"};

export function settings_theme_sidebar(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
