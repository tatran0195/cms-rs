import { getLocale } from '../runtime.js';

const translations = {"ar":"آخر {days} يومًا — من التسجيل إلى أول نشر ناجح","bn":"Last {days} days — sign-up to first successful publish (starter auto-publishes excluded)","de":"Last {days} days — sign-up to first successful publish (starter auto-publishes excluded)","en":"Last {days} days — sign-up to first successful publish (starter auto-publishes excluded)","es":"Last {days} days — sign-up to first successful publish (starter auto-publishes excluded)","fr":"Last {days} days — sign-up to first successful publish (starter auto-publishes excluded)","hi":"Last {days} days — sign-up to first successful publish (starter auto-publishes excluded)","id":"Last {days} days — sign-up to first successful publish (starter auto-publishes excluded)","pt-BR":"Last {days} days — sign-up to first successful publish (starter auto-publishes excluded)","ru":"Last {days} days — sign-up to first successful publish (starter auto-publishes excluded)","ur":"Last {days} days — sign-up to first successful publish (starter auto-publishes excluded)","zh-CN":"Last {days} days — sign-up to first successful publish (starter auto-publishes excluded)"};

export function admin_overview_activationbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
