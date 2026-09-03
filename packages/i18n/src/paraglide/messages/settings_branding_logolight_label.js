import { getLocale } from '../runtime.js';

const translations = {"ar":"الشعار الفاتح","bn":"লোগো আলো","de":"Logo-Licht","en":"Logo light","es":"Luz del logotipo","fr":"Lumière du logo","hi":"लोगो प्रकाश","id":"Lampu logo","pt-BR":"Luz do logotipo","ru":"Свет логотипа","ur":"لوگو کی روشنی","zh-CN":"标志灯"};

export function settings_branding_logolight_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
