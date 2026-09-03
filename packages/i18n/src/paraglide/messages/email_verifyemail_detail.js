import { getLocale } from '../runtime.js';

const translations = {"ar":"يمكن استخدام رابط التأكيد مرة واحدة. إذا انتهت صلاحيته، اطلب رابطًا جديدًا من صفحة تسجيل الدخول.","bn":"This verification link is single-use. If it expires, request a new one from the sign-in page.","de":"This verification link is single-use. If it expires, request a new one from the sign-in page.","en":"This verification link is single-use. If it expires, request a new one from the sign-in page.","es":"This verification link is single-use. If it expires, request a new one from the sign-in page.","fr":"This verification link is single-use. If it expires, request a new one from the sign-in page.","hi":"This verification link is single-use. If it expires, request a new one from the sign-in page.","id":"This verification link is single-use. If it expires, request a new one from the sign-in page.","pt-BR":"This verification link is single-use. If it expires, request a new one from the sign-in page.","ru":"This verification link is single-use. If it expires, request a new one from the sign-in page.","ur":"This verification link is single-use. If it expires, request a new one from the sign-in page.","zh-CN":"This verification link is single-use. If it expires, request a new one from the sign-in page."};

export function email_verifyemail_detail(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
