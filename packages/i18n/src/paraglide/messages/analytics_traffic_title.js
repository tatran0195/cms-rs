import { getLocale } from '../runtime.js';

const translations = {"ar":"الزيارات","bn":"ট্রাফিক","de":"Verkehr","en":"Traffic","es":"Tráfico","fr":"Trafic","hi":"यातायात","id":"Lalu lintas","pt-BR":"Trânsito","ru":"Трафик","ur":"ٹریفک","zh-CN":"交通"};

export function analytics_traffic_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
