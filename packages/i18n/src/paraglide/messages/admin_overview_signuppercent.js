import { getLocale } from '../runtime.js';

const translations = {"ar":"{percent} من التسجيلات","bn":"{percent} of sign-ups","de":"{percent} of sign-ups","en":"{percent} of sign-ups","es":"{percent} of sign-ups","fr":"{percent} of sign-ups","hi":"{percent} of sign-ups","id":"{percent} of sign-ups","pt-BR":"{percent} of sign-ups","ru":"{percent} of sign-ups","ur":"{percent} of sign-ups","zh-CN":"{percent} of sign-ups"};

export function admin_overview_signuppercent(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
