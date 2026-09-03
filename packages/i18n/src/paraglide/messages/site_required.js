import { getLocale } from '../runtime.js';

const translations = {"ar":"مطلوب","bn":"প্রয়োজনীয়","de":"erforderlich","en":"required","es":"requerido","fr":"requis","hi":"आवश्यक","id":"diperlukan","pt-BR":"obrigatório","ru":"требуется","ur":"مطلوبہ","zh-CN":"必填"};

export function site_required(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
