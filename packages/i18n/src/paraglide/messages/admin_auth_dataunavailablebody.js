import { getLocale } from '../runtime.js';

const translations = {"ar":"جلستك صالحة، لكن تعذر الوصول إلى واجهة الإدارة. لم نستنتج حالة الصلاحية من هذا الفشل.","bn":"Your session is valid, but the admin API could not be reached. No authorization conclusion was inferred from this failure.","de":"Your session is valid, but the admin API could not be reached. No authorization conclusion was inferred from this failure.","en":"Your session is valid, but the admin API could not be reached. No authorization conclusion was inferred from this failure.","es":"Your session is valid, but the admin API could not be reached. No authorization conclusion was inferred from this failure.","fr":"Your session is valid, but the admin API could not be reached. No authorization conclusion was inferred from this failure.","hi":"Your session is valid, but the admin API could not be reached. No authorization conclusion was inferred from this failure.","id":"Your session is valid, but the admin API could not be reached. No authorization conclusion was inferred from this failure.","pt-BR":"Your session is valid, but the admin API could not be reached. No authorization conclusion was inferred from this failure.","ru":"Your session is valid, but the admin API could not be reached. No authorization conclusion was inferred from this failure.","ur":"Your session is valid, but the admin API could not be reached. No authorization conclusion was inferred from this failure.","zh-CN":"Your session is valid, but the admin API could not be reached. No authorization conclusion was inferred from this failure."};

export function admin_auth_dataunavailablebody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
