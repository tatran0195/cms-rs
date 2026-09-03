import { getLocale } from '../runtime.js';

const translations = {"ar":"مقارنةً بالفترة السابقة","bn":"পূর্ববর্তী সময়ের বনাম","de":"im Vergleich zur Vorperiode","en":"vs. previous period","es":"versus período anterior","fr":"par rapport à la période précédente","hi":"बनाम पिछली अवधि","id":"vs periode sebelumnya","pt-BR":"vs. período anterior","ru":"по сравнению с предыдущим периодом","ur":"بمقابلہ پچھلی مدت","zh-CN":"与上一时期相比"};

export function analytics_vsprevious(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
