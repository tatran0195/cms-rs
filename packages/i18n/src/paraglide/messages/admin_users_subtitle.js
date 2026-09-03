import { getLocale } from '../runtime.js';

const translations = {"ar":"المصادقة والوصول إلى مساحات العمل وحالة الحسابات في Nibleaf Cloud.","bn":"Authentication, workspace access, and account state across Nibleaf Cloud.","de":"Authentication, workspace access, and account state across Nibleaf Cloud.","en":"Authentication, workspace access, and account state across Nibleaf Cloud.","es":"Authentication, workspace access, and account state across Nibleaf Cloud.","fr":"Authentication, workspace access, and account state across Nibleaf Cloud.","hi":"Authentication, workspace access, and account state across Nibleaf Cloud.","id":"Authentication, workspace access, and account state across Nibleaf Cloud.","pt-BR":"Authentication, workspace access, and account state across Nibleaf Cloud.","ru":"Authentication, workspace access, and account state across Nibleaf Cloud.","ur":"Authentication, workspace access, and account state across Nibleaf Cloud.","zh-CN":"Authentication, workspace access, and account state across Nibleaf Cloud."};

export function admin_users_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
