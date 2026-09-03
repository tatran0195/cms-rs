import { getLocale } from '../runtime.js';

const translations = {"ar":"تخزين أبعاد UTM المحدودة فقط بعد موافقة القارئ على التحليلات.","bn":"Store bounded UTM dimensions only after the reader grants analytics consent.","de":"Store bounded UTM dimensions only after the reader grants analytics consent.","en":"Store bounded UTM dimensions only after the reader grants analytics consent.","es":"Store bounded UTM dimensions only after the reader grants analytics consent.","fr":"Store bounded UTM dimensions only after the reader grants analytics consent.","hi":"Store bounded UTM dimensions only after the reader grants analytics consent.","id":"Store bounded UTM dimensions only after the reader grants analytics consent.","pt-BR":"Store bounded UTM dimensions only after the reader grants analytics consent.","ru":"Store bounded UTM dimensions only after the reader grants analytics consent.","ur":"Store bounded UTM dimensions only after the reader grants analytics consent.","zh-CN":"Store bounded UTM dimensions only after the reader grants analytics consent."};

export function settings_analytics_campaigndimensions_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
