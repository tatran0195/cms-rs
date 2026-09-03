import { getLocale } from '../runtime.js';

const translations = {"ar":"الحالة الصحية","bn":"স্বাস্থ্য","de":"Betriebsstatus","en":"Health","es":"Estado operativo","fr":"État opérationnel","hi":"स्वास्थ्य","id":"Status operasional","pt-BR":"Estado operacional","ru":"Состояние","ur":"صحت","zh-CN":"运行状况"};

export function settings_integrations_health(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
