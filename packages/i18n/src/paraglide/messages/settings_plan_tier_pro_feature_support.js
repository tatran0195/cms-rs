import { getLocale } from '../runtime.js';

const translations = {"ar":"دعم عبر البريد الإلكتروني","bn":"ইমেল সমর্থন","de":"E-Mail-Support","en":"Email support","es":"Soporte por correo electrónico","fr":"Assistance par e-mail","hi":"ईमेल समर्थन","id":"Dukungan email","pt-BR":"Suporte por e-mail","ru":"Поддержка по электронной почте","ur":"ای میل سپورٹ","zh-CN":"电子邮件支持"};

export function settings_plan_tier_pro_feature_support(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
