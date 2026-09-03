import { getLocale } from '../runtime.js';

const translations = {"ar":"يحتاج إلى انتباه","bn":"মনোযোগ প্রয়োজন","de":"Benötigt Aufmerksamkeit","en":"Needs attention","es":"Needs attention.","fr":"Besoin d'attention","hi":"ध्यान देना","id":"Butuh perhatian","pt-BR":"Precisa de atenção","ru":"Требует внимания","ur":"توجہ کی ضرورت ہے","zh-CN":"需要关注"};

export function settings_integrations_status_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
