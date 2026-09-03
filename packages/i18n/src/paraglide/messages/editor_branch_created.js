import { getLocale } from '../runtime.js';

const translations = {"ar":"تم إنشاء الإصدار «{name}»","bn":"\"{name}\" সংস্করণ তৈরি করা হয়েছে","de":"Erstellte Version „{name}“","en":"Created version “{name}”","es":"Versión creada “{name}”","fr":"Version créée « {name} »","hi":"बनाया गया संस्करण \"{name}\"","id":"Versi “{name}” dibuat","pt-BR":"Versão criada “{name}”","ru":"Создана версия «{name}».","ur":"تخلیق کردہ ورژن \"{name}\"","zh-CN":"创建版本“{name}”"};

export function editor_branch_created(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
