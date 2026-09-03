import { getLocale } from '../runtime.js';

const translations = {"ar":"أسفل البداية","bn":"নিচে শুরুতে","de":"Unten am Anfang","en":"Bottom start","es":"Abajo al inicio","fr":"En bas au début","hi":"नीचे शुरुआत में","id":"Bawah awal","pt-BR":"Embaixo no início","ru":"Внизу в начале","ur":"نیچے آغاز میں","zh-CN":"底部起始侧"};

export function settings_addons_consent_placement_start(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
