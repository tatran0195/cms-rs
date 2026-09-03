import { getLocale } from '../runtime.js';

const translations = {"ar":"البريد الإلكتروني مطلوب","bn":"ইমেল প্রয়োজন","de":"E-Mail ist erforderlich","en":"Email is required","es":"Se requiere correo electrónico","fr":"L'e-mail est requis","hi":"ईमेल आवश्यक है","id":"Email diperlukan","pt-BR":"O e-mail é obrigatório","ru":"Требуется электронная почта","ur":"ای میل درکار ہے۔","zh-CN":"电子邮件为必填项"};

export function validation_emailrequired(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
