import { getLocale } from '../runtime.js';

const translations = {"ar":"غير مطلوبة","bn":"প্রয়োজন নেই","de":"Fehlanzeige","en":"Not required","es":"No se requiere","fr":"Non requis","hi":"आवश्यकता नहीं","id":"Tidak diperlukan","pt-BR":"Não exigido","ru":"Не требуется","ur":"درکار نہیں ہے","zh-CN":"无需"};

export function settings_integrations_notrequired(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
