import { getLocale } from '../runtime.js';

const translations = {"ar":"أسفل النهاية","bn":"নিচে শেষে","de":"Unten am Ende","en":"Bottom end","es":"Abajo al final","fr":"En bas à la fin","hi":"नीचे अंत में","id":"Bawah akhir","pt-BR":"Embaixo no fim","ru":"Внизу в конце","ur":"نیچے اختتام پر","zh-CN":"底部结束侧"};

export function settings_addons_consent_placement_end(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
