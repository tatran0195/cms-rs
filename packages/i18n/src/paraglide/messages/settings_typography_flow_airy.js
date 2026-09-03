import { getLocale } from '../runtime.js';

const translations = {"ar":"متباعد","bn":"বায়বীয়","de":"Luftig","en":"Airy","es":"aireado","fr":"Aéré","hi":"हवादार","id":"lapang","pt-BR":"Arejado","ru":"Эйри","ur":"ہوا دار","zh-CN":"艾里"};

export function settings_typography_flow_airy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
