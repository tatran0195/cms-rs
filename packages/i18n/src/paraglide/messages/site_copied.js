import { getLocale } from '../runtime.js';

const translations = {"ar":"تم النسخ","bn":"কপি করা হয়েছে","de":"Kopiert","en":"Copied","es":"copiado","fr":"Copié","hi":"नकल की गई","id":"Disalin","pt-BR":"Copiado","ru":"Скопировано","ur":"کاپی","zh-CN":"已复制"};

export function site_copied(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
