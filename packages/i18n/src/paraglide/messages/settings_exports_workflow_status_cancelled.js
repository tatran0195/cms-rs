import { getLocale } from '../runtime.js';

const translations = {"ar":"ملغى","bn":"বাতিল","de":"abgesagt","en":"cancelled","es":"cancelado","fr":"annulé","hi":"रद्द कर दिया गया","id":"dibatalkan","pt-BR":"cancelado","ru":"отменен","ur":"منسوخ","zh-CN":"取消"};

export function settings_exports_workflow_status_cancelled(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
