import { getLocale } from '../runtime.js';

const translations = {"ar":"تفعيل","bn":"সক্রিয় করুন","de":"Aktivieren","en":"Activate","es":"Activar","fr":"Activer","hi":"सक्रिय","id":"Aktifkan","pt-BR":"Activar","ru":"активировать","ur":"فعال کریں","zh-CN":"启动"};

export function settings_integrations_activate(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
