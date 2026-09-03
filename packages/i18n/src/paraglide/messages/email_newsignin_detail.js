import { getLocale } from '../runtime.js';

const translations = {"ar":"إذا لم تكن أنت، فسجّل خروج الجلسات الأخرى فورًا وتواصل مع support@nibleaf.com.","bn":"If this was not you, sign out other sessions immediately and contact support@nibleaf.com.","de":"If this was not you, sign out other sessions immediately and contact support@nibleaf.com.","en":"If this was not you, sign out other sessions immediately and contact support@nibleaf.com.","es":"If this was not you, sign out other sessions immediately and contact support@nibleaf.com.","fr":"If this was not you, sign out other sessions immediately and contact support@nibleaf.com.","hi":"If this was not you, sign out other sessions immediately and contact support@nibleaf.com.","id":"If this was not you, sign out other sessions immediately and contact support@nibleaf.com.","pt-BR":"If this was not you, sign out other sessions immediately and contact support@nibleaf.com.","ru":"If this was not you, sign out other sessions immediately and contact support@nibleaf.com.","ur":"If this was not you, sign out other sessions immediately and contact support@nibleaf.com.","zh-CN":"If this was not you, sign out other sessions immediately and contact support@nibleaf.com."};

export function email_newsignin_detail(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
