import { getLocale } from '../runtime.js';

const translations = {"ar":"{count} جاهزة · {percent}","bn":"{count} ready · {percent}","de":"{count} ready · {percent}","en":"{count} ready · {percent}","es":"{count} ready · {percent}","fr":"{count} ready · {percent}","hi":"{count} ready · {percent}","id":"{count} ready · {percent}","pt-BR":"{count} ready · {percent}","ru":"{count} ready · {percent}","ur":"{count} ready · {percent}","zh-CN":"{count} ready · {percent}"};

export function admin_overview_readypercent(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
