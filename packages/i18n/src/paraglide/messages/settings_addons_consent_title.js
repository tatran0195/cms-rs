import { getLocale } from '../runtime.js';

const translations = {"ar":"شريط الموافقة","bn":"সম্মতি ব্যানার","de":"Einwilligungsbanner","en":"Consent banner","es":"Banner de consentimiento","fr":"Bannière de consentement","hi":"सहमति बैनर","id":"Banner persetujuan","pt-BR":"Banner de consentimento","ru":"Баннер согласия","ur":"رضامندی کا بینر","zh-CN":"同意横幅"};

export function settings_addons_consent_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
