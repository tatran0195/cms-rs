import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد تسجيلات تحولت إلى نشر ناجح في هذه الفترة.","bn":"Time to first successful publish: no converted sign-ups in this window.","de":"Time to first successful publish: no converted sign-ups in this window.","en":"Time to first successful publish: no converted sign-ups in this window.","es":"Time to first successful publish: no converted sign-ups in this window.","fr":"Time to first successful publish: no converted sign-ups in this window.","hi":"Time to first successful publish: no converted sign-ups in this window.","id":"Time to first successful publish: no converted sign-ups in this window.","pt-BR":"Time to first successful publish: no converted sign-ups in this window.","ru":"Time to first successful publish: no converted sign-ups in this window.","ur":"Time to first successful publish: no converted sign-ups in this window.","zh-CN":"Time to first successful publish: no converted sign-ups in this window."};

export function admin_overview_noconversion(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
