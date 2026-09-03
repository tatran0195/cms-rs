import { getLocale } from '../runtime.js';

const translations = {"ar":"الوضع الداكن","bn":"ডার্ক মোড","de":"Dunkler Modus","en":"Dark mode","es":"modo oscuro","fr":"Mode sombre","hi":"डार्क मोड","id":"Mode gelap","pt-BR":"Modo escuro","ru":"Темный режим","ur":"ڈارک موڈ","zh-CN":"深色模式"};

export function account_darkmode(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
