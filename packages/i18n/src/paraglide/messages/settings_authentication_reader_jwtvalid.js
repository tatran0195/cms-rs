import { getLocale } from '../runtime.js';

const translations = {"ar":"JWT صالح","bn":"JWT বৈধ","de":"JWT gültig","en":"JWT valid","es":"JWT válido","fr":"JWT valide","hi":"JWT मान्य","id":"JWT sah","pt-BR":"JWT válido","ru":"JWT действителен","ur":"JWT درست","zh-CN":"JWT 有效"};

export function settings_authentication_reader_jwtvalid(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
