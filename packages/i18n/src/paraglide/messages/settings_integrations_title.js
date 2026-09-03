import { getLocale } from '../runtime.js';

const translations = {"ar":"التكاملات","bn":"ইন্টিগ্রেশনসমূহ","de":"Integrationen","en":"Integrations","es":"Integraciones","fr":"Intégrations","hi":"एकीकरण","id":"Integrasi","pt-BR":"Integrações","ru":"Интеграции","ur":"انضمامات","zh-CN":"集成"};

export function settings_integrations_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
