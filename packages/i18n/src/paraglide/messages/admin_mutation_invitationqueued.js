import { getLocale } from '../runtime.js';

const translations = {"ar":"أُضيفت دعوة المالك إلى قائمة الإرسال: {email}","bn":"Owner invitation queued for {email}","de":"Owner invitation queued for {email}","en":"Owner invitation queued for {email}","es":"Owner invitation queued for {email}","fr":"Owner invitation queued for {email}","hi":"Owner invitation queued for {email}","id":"Owner invitation queued for {email}","pt-BR":"Owner invitation queued for {email}","ru":"Owner invitation queued for {email}","ur":"Owner invitation queued for {email}","zh-CN":"Owner invitation queued for {email}"};

export function admin_mutation_invitationqueued(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
