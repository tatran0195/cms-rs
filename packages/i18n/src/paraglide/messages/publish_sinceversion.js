import { getLocale } from '../runtime.js';

const translations = {"ar":"منذ الإصدار v{version}","bn":"v{version} থেকে","de":"Seit v{version}","en":"Since v{version}","es":"Desde v{version}","fr":"Depuis v{version}","hi":"चूँकि v{version}","id":"Sejak v{version}","pt-BR":"Desde v{version}","ru":"Поскольку v{version}","ur":"v{version} سے","zh-CN":"自 v{version} 起"};

export function publish_sinceversion(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
