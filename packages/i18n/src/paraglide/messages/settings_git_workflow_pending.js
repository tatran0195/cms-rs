import { getLocale } from '../runtime.js';

const translations = {"ar":"قيد الانتظار","bn":"মুলতুবি","de":"ausstehend","en":"pending","es":"pendiente","fr":"en attente","hi":"लंबित","id":"tertunda","pt-BR":"pendente","ru":"в ожидании","ur":"زیر التواء","zh-CN":"待定"};

export function settings_git_workflow_pending(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
