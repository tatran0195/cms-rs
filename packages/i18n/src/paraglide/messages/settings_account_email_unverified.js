import { getLocale } from '../runtime.js';

const translations = {"ar":"غير مُوثَّق","bn":"যাচাই করা হয়নি","de":"Nicht bestätigt","en":"Unverified","es":"No verificado","fr":"Non vérifié","hi":"असत्यापित","id":"Belum terverifikasi","pt-BR":"Não verificado","ru":"Непроверенный","ur":"غیر تصدیق شدہ","zh-CN":"未验证"};

export function settings_account_email_unverified(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
