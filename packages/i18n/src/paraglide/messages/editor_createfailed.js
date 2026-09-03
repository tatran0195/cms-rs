import { getLocale } from '../runtime.js';

const translations = {"ar":"فشلت العملية","bn":"ব্যর্থ হয়েছে","de":"Fehlgeschlagen","en":"Failed","es":"Fallido","fr":"Échec","hi":"असफल","id":"Gagal","pt-BR":"Falha","ru":"Не удалось","ur":"ناکام","zh-CN":"失败"};

export function editor_createfailed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
