import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد مؤشرات فشل أو إشراف حالية في الملخص التشغيلي.","bn":"No current failure or moderation signals in the operational summary.","de":"No current failure or moderation signals in the operational summary.","en":"No current failure or moderation signals in the operational summary.","es":"No current failure or moderation signals in the operational summary.","fr":"No current failure or moderation signals in the operational summary.","hi":"No current failure or moderation signals in the operational summary.","id":"No current failure or moderation signals in the operational summary.","pt-BR":"No current failure or moderation signals in the operational summary.","ru":"No current failure or moderation signals in the operational summary.","ur":"No current failure or moderation signals in the operational summary.","zh-CN":"No current failure or moderation signals in the operational summary."};

export function admin_overview_nosignals(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
