import { getLocale } from '../runtime.js';

const translations = {"ar":"التراجع","bn":"রোল ব্যাক","de":"Zurückrollen","en":"Roll back","es":"retroceder","fr":"Revenir en arrière","hi":"वापस रोल करें","id":"Putar kembali","pt-BR":"Reverter","ru":"Откат назад","ur":"پیچھے ہٹنا","zh-CN":"回滚"};

export function deploy_rollback(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
