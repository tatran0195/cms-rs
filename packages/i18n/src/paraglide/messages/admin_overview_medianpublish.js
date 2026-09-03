import { getLocale } from '../runtime.js';

const translations = {"ar":"الوقت الوسيط لأول نشر ناجح: {hours} ساعة. نشر {count} عملاء بنجاح خلال 24 ساعة.","bn":"Median time to first successful publish: {hours}h. {count} sign-ups published successfully within 24h.","de":"Median time to first successful publish: {hours}h. {count} sign-ups published successfully within 24h.","en":"Median time to first successful publish: {hours}h. {count} sign-ups published successfully within 24h.","es":"Median time to first successful publish: {hours}h. {count} sign-ups published successfully within 24h.","fr":"Median time to first successful publish: {hours}h. {count} sign-ups published successfully within 24h.","hi":"Median time to first successful publish: {hours}h. {count} sign-ups published successfully within 24h.","id":"Median time to first successful publish: {hours}h. {count} sign-ups published successfully within 24h.","pt-BR":"Median time to first successful publish: {hours}h. {count} sign-ups published successfully within 24h.","ru":"Median time to first successful publish: {hours}h. {count} sign-ups published successfully within 24h.","ur":"Median time to first successful publish: {hours}h. {count} sign-ups published successfully within 24h.","zh-CN":"Median time to first successful publish: {hours}h. {count} sign-ups published successfully within 24h."};

export function admin_overview_medianpublish(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
