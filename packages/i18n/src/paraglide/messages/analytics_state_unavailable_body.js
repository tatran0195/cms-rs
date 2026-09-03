import { getLocale } from '../runtime.js';

const translations = {"ar":"تستمر وثائقك في العمل بصورة طبيعية. تظهر المقاييس كغير معروفة حتى تتعافى خدمة التحليلات.","bn":"Your documentation is still serving normally. Metrics are shown as unknown until the analytics store recovers.","de":"Your documentation is still serving normally. Metrics are shown as unknown until the analytics store recovers.","en":"Your documentation is still serving normally. Metrics are shown as unknown until the analytics store recovers.","es":"Your documentation is still serving normally. Metrics are shown as unknown until the analytics store recovers.","fr":"Your documentation is still serving normally. Metrics are shown as unknown until the analytics store recovers.","hi":"Your documentation is still serving normally. Metrics are shown as unknown until the analytics store recovers.","id":"Your documentation is still serving normally. Metrics are shown as unknown until the analytics store recovers.","pt-BR":"Your documentation is still serving normally. Metrics are shown as unknown until the analytics store recovers.","ru":"Your documentation is still serving normally. Metrics are shown as unknown until the analytics store recovers.","ur":"Your documentation is still serving normally. Metrics are shown as unknown until the analytics store recovers.","zh-CN":"Your documentation is still serving normally. Metrics are shown as unknown until the analytics store recovers."};

export function analytics_state_unavailable_body(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
