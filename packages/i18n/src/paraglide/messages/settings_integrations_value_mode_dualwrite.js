import { getLocale } from '../runtime.js';

const translations = {"ar":"كتابة مزدوجة","bn":"দ্বৈত লেখা","de":"Doppelschreiben","en":"Dual write","es":"Escritura doble","fr":"Double écriture","hi":"दोहरी लेखन","id":"Penulisan ganda","pt-BR":"Gravação dupla","ru":"Двойная запись","ur":"دوہری تحریر","zh-CN":"双写"};

export function settings_integrations_value_mode_dualwrite(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
