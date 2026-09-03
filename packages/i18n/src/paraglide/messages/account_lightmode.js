import { getLocale } from '../runtime.js';

const translations = {"ar":"الوضع الفاتح","bn":"হালকা মোড","de":"Lichtmodus","en":"Light mode","es":"Modo de luz","fr":"Mode lumière","hi":"लाइट मोड","id":"Modus ringan","pt-BR":"Modo claro","ru":"Светлый режим","ur":"لائٹ موڈ","zh-CN":"灯光模式"};

export function account_lightmode(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
