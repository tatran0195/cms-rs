import { getLocale } from '../runtime.js';

const translations = {"ar":"تبديل السمة","bn":"থিম টগল করুন","de":"Thema umschalten","en":"Toggle theme","es":"Alternar tema","fr":"Changer de thème","hi":"थीम टॉगल करें","id":"Beralih tema","pt-BR":"Alternar tema","ru":"Переключить тему","ur":"تھیم کو ٹوگل کریں۔","zh-CN":"切换主题"};

export function site_toggletheme(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
