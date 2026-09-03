import { getLocale } from '../runtime.js';

const translations = {"ar":"استخدمه فقط لحاجة دعم نشطة","bn":"Use only for an active support need","de":"Use only for an active support need","en":"Use only for an active support need","es":"Use only for an active support need","fr":"Use only for an active support need","hi":"Use only for an active support need","id":"Use only for an active support need","pt-BR":"Use only for an active support need","ru":"Use only for an active support need","ur":"Use only for an active support need","zh-CN":"Use only for an active support need"};

export function admin_support_cautiontitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
