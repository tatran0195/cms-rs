import { getLocale } from '../runtime.js';

const translations = {"ar":"تنتهي صلاحية الرمز خلال {minutes} دقائق، ولا يمكن استخدامه إلا مرة واحدة.","bn":"The code expires in {minutes} minutes and can be used only once.","de":"The code expires in {minutes} minutes and can be used only once.","en":"The code expires in {minutes} minutes and can be used only once.","es":"The code expires in {minutes} minutes and can be used only once.","fr":"The code expires in {minutes} minutes and can be used only once.","hi":"The code expires in {minutes} minutes and can be used only once.","id":"The code expires in {minutes} minutes and can be used only once.","pt-BR":"The code expires in {minutes} minutes and can be used only once.","ru":"The code expires in {minutes} minutes and can be used only once.","ur":"The code expires in {minutes} minutes and can be used only once.","zh-CN":"The code expires in {minutes} minutes and can be used only once."};

export function email_otp_expiry(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
