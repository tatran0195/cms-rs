import { getLocale } from '../runtime.js';

const translations = {"ar":"لم يُتحقق منه","bn":"ভেরিফাইড না","de":"Nicht verifiziert","en":"Not verified","es":"No Verificado","fr":"Non vérifié","hi":"सत्यापित नहीं","id":"Belum diverifikasi","pt-BR":"Não verificado","ru":"Не проверено","ur":"توثیق شدہ نہیں ہے","zh-CN":"未核实"};

export function settings_integrations_health_unverified(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
