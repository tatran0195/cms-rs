import { getLocale } from '../runtime.js';

const translations = {"ar":"نطاق Plausible","bn":"যুক্তিসঙ্গত ডোমেইন","de":"Plausibler Bereich","en":"Plausible domain","es":"Dominio plausible","fr":"Domaine plausible","hi":"प्रशंसनीय डोमेन","id":"Domain yang masuk akal","pt-BR":"Domínio plausível","ru":"Правдоподобный домен","ur":"قابل فہم ڈومین","zh-CN":"合理的域"};

export function settings_analytics_plausible_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
