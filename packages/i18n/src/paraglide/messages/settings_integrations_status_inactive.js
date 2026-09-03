import { getLocale } from '../runtime.js';

const translations = {"ar":"غير نشط","bn":"নিষ্ক্রিয়","de":"Inaktiv","en":"Inactive","es":"Inactivo","fr":"Inactif","hi":"निष्क्रिय","id":"Tidak aktif","pt-BR":"Inativo","ru":"неактивный","ur":"غیر فعال","zh-CN":"非活动"};

export function settings_integrations_status_inactive(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
