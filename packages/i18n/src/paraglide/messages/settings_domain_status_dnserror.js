import { getLocale } from '../runtime.js';

const translations = {"ar":"يحتاج DNS إلى مراجعة","bn":"DNS মনোযোগ প্রয়োজন","de":"DNS braucht Aufmerksamkeit","en":"DNS needs attention","es":"DNS necesita atención","fr":"Le DNS a besoin d'attention","hi":"डीएनएस पर ध्यान देने की जरूरत है","id":"DNS perlu mendapat perhatian","pt-BR":"DNS precisa de atenção","ru":"DNS требует внимания","ur":"DNS کو توجہ کی ضرورت ہے۔","zh-CN":"DNS需要注意"};

export function settings_domain_status_dnserror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
