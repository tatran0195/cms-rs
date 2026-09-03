import { getLocale } from '../runtime.js';

const translations = {"ar":"الموضع","bn":"অবস্থান","de":"Position","en":"Placement","es":"Ubicación","fr":"Emplacement","hi":"स्थान","id":"Penempatan","pt-BR":"Posicionamento","ru":"Расположение","ur":"مقام","zh-CN":"位置"};

export function settings_addons_feedback_placement(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
