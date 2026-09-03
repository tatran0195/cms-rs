import { getLocale } from '../runtime.js';

const translations = {"ar":"تخطّ الآن","bn":"আপাতত এড়িয়ে যান","de":"Überspringen Sie es vorerst","en":"Skip for now","es":"Saltar por ahora","fr":"Passer pour l'instant","hi":"अभी के लिए छोड़ें","id":"Lewati untuk saat ini","pt-BR":"Pular por enquanto","ru":"Пропустить сейчас","ur":"ابھی کے لیے چھوڑ دیں۔","zh-CN":"暂时跳过"};

export function auth_invite_skip(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
