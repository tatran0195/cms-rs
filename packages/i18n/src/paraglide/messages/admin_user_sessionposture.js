import { getLocale } from '../runtime.js';

const translations = {"ar":"حالة الجلسات","bn":"Session Posture","de":"Session Posture","en":"Session Posture","es":"Session Posture","fr":"Session Posture","hi":"Session Posture","id":"Session Posture","pt-BR":"Session Posture","ru":"Session Posture","ur":"Session Posture","zh-CN":"Session Posture"};

export function admin_user_sessionposture(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
