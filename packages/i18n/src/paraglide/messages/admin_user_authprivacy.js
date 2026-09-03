import { getLocale } from '../runtime.js';

const translations = {"ar":"نعرض نوع وسيلة الدخول وحالتها فقط، من دون رموز أو بيانات اعتماد.","bn":"Auth Privacy","de":"Auth Privacy","en":"Auth Privacy","es":"Auth Privacy","fr":"Auth Privacy","hi":"Auth Privacy","id":"Auth Privacy","pt-BR":"Auth Privacy","ru":"Auth Privacy","ur":"Auth Privacy","zh-CN":"Auth Privacy"};

export function admin_user_authprivacy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
