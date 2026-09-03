import { getLocale } from '../runtime.js';

const translations = {"ar":"خاص","bn":"ব্যক্তিগত","de":"Privat","en":"Private","es":"Privado","fr":"Privé","hi":"निजी","id":"Pribadi","pt-BR":"Privado","ru":"Частный","ur":"نجی","zh-CN":"私人"};

export function settings_authentication_mode_private(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
