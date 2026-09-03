import { getLocale } from '../runtime.js';

const translations = {"ar":"شريط الموافقة على ملفات تعريف الارتباط","bn":"কুকি সম্মতি ব্যানার","de":"Cookie-Zustimmungsbanner","en":"Cookie consent banner","es":"Banner de consentimiento de cookies","fr":"Bannière de consentement aux cookies","hi":"कुकी सहमति बैनर","id":"Spanduk persetujuan cookie","pt-BR":"Banner de consentimento de cookies","ru":"Баннер согласия на использование файлов cookie","ur":"کوکی رضامندی کا بینر","zh-CN":"Cookie 同意横幅"};

export function settings_analytics_cookieconsent_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
