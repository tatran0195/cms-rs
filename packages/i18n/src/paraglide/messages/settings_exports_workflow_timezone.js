import { getLocale } from '../runtime.js';

const translations = {"ar":"المنطقة الزمنية IANA","bn":"IANA টাইমজোন","de":"IANA-Zeitzone","en":"IANA timezone","es":"Zona horaria de la IANA","fr":"Fuseau horaire de l'IANA","hi":"आईएएनए समय क्षेत्र","id":"Zona waktu IANA","pt-BR":"Fuso horário IANA","ru":"Часовой пояс IANA","ur":"IANA ٹائم زون","zh-CN":"IANA 时区"};

export function settings_exports_workflow_timezone(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
