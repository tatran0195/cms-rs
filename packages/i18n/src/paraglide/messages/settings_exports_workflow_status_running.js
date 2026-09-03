import { getLocale } from '../runtime.js';

const translations = {"ar":"قيد التشغيل","bn":"চলমান","de":"laufen","en":"running","es":"corriendo","fr":"courir","hi":"चल रहा है","id":"berlari","pt-BR":"correndo","ru":"бег","ur":"چل رہا ہے","zh-CN":"跑步"};

export function settings_exports_workflow_status_running(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
