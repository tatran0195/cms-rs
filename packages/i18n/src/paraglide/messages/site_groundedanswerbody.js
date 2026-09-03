import { getLocale } from '../runtime.js';

const translations = {"ar":"تُستبعد الصفحات التي لا يسمح لك بقراءتها، وتظهر الاستشهادات مع الإجابة.","bn":"Pages you cannot read are excluded, and citations are shown with the answer.","de":"Pages you cannot read are excluded, and citations are shown with the answer.","en":"Pages you cannot read are excluded, and citations are shown with the answer.","es":"Pages you cannot read are excluded, and citations are shown with the answer.","fr":"Pages you cannot read are excluded, and citations are shown with the answer.","hi":"Pages you cannot read are excluded, and citations are shown with the answer.","id":"Pages you cannot read are excluded, and citations are shown with the answer.","pt-BR":"Pages you cannot read are excluded, and citations are shown with the answer.","ru":"Pages you cannot read are excluded, and citations are shown with the answer.","ur":"Pages you cannot read are excluded, and citations are shown with the answer.","zh-CN":"Pages you cannot read are excluded, and citations are shown with the answer."};

export function site_groundedanswerbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
