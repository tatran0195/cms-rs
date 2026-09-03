import { getLocale } from '../runtime.js';

const translations = {"ar":"دليل الاستضافة الذاتية","bn":"Self-hosting guide","de":"Self-hosting guide","en":"Self-hosting guide","es":"Self-hosting guide","fr":"Self-hosting guide","hi":"Self-hosting guide","id":"Self-hosting guide","pt-BR":"Self-hosting guide","ru":"Self-hosting guide","ur":"Self-hosting guide","zh-CN":"Self-hosting guide"};

export function blog_selfhostingguide(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
