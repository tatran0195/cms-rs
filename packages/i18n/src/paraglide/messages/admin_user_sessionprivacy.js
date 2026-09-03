import { getLocale } from '../runtime.js';

const translations = {"ar":"تعرض أوقات الجلسات وحالتها فقط، من دون عناوين IP أو وكلاء المستخدم.","bn":"Session Privacy","de":"Session Privacy","en":"Session Privacy","es":"Session Privacy","fr":"Session Privacy","hi":"Session Privacy","id":"Session Privacy","pt-BR":"Session Privacy","ru":"Session Privacy","ur":"Session Privacy","zh-CN":"Session Privacy"};

export function admin_user_sessionprivacy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
