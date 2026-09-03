import { getLocale } from '../runtime.js';

const translations = {"ar":"الشعار الداكن","bn":"লোগো অন্ধকার","de":"Logo dunkel","en":"Logo dark","es":"Logotipo oscuro","fr":"Logo sombre","hi":"लोगो अंधेरा","id":"Logonya gelap","pt-BR":"Logotipo escuro","ru":"Логотип темный","ur":"لوگو سیاہ","zh-CN":"徽标深色"};

export function settings_branding_logodark_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
