import { getLocale } from '../runtime.js';

const translations = {"ar":"في الطابور","bn":"সারিবদ্ধ","de":"In der Warteschlange","en":"Queued","es":"En cola","fr":"En file d'attente","hi":"कतारबद्ध","id":"Mengantri","pt-BR":"Na fila","ru":"В очереди","ur":"قطار میں لگ گیا۔","zh-CN":"排队"};

export function deploy_step_queued(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
