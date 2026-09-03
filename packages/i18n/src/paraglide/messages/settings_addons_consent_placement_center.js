import { getLocale } from '../runtime.js';

const translations = {"ar":"أسفل الوسط","bn":"নিচে মাঝখানে","de":"Unten in der Mitte","en":"Bottom center","es":"Abajo en el centro","fr":"En bas au centre","hi":"नीचे बीच में","id":"Bawah tengah","pt-BR":"Embaixo no centro","ru":"Внизу по центру","ur":"نیچے درمیان میں","zh-CN":"底部居中"};

export function settings_addons_consent_placement_center(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
