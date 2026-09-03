import { getLocale } from '../runtime.js';

const translations = {"ar":"إعادة صياغة","bn":"রিফ্রেস","de":"Umformulieren","en":"Rephrase","es":"Reformular","fr":"Reformuler","hi":"दोबारा लिखना","id":"Ulangi","pt-BR":"Reformular","ru":"Перефразировать","ur":"ریفریج","zh-CN":"改写"};

export function editor_ai_rephrase(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
