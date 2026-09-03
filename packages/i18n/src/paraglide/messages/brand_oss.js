import { getLocale } from '../runtime.js';

const translations = {"ar":"مفتوح المصدر","bn":"ওএসএস","de":"OSS","en":"OSS","es":"OSS","fr":"OSS","hi":"ओ.एस.एस","id":"OSS","pt-BR":"OSS","ru":"ОСС","ur":"او ایس ایس","zh-CN":"开放源码软件"};

export function brand_oss(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
