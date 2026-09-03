import { getLocale } from '../runtime.js';

const translations = {"ar":"يتطلب الانتباه","bn":"মনোযোগ প্রয়োজন","de":"Braucht Aufmerksamkeit","en":"Needs attention","es":"necesita atencion","fr":"A besoin d'attention","hi":"ध्यान देने की जरूरत है","id":"Perlu perhatian","pt-BR":"Precisa de atenção","ru":"Требует внимания","ur":"توجہ کی ضرورت ہے۔","zh-CN":"需要注意"};

export function settings_domain_status_needsattention(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
