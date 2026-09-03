import { getLocale } from '../runtime.js';

const translations = {"ar":"تم","bn":"সম্পন্ন","de":"Fertig","en":"Done","es":"hecho","fr":"Terminé","hi":"हो गया","id":"Selesai","pt-BR":"Concluído","ru":"Готово","ur":"ہو گیا","zh-CN":"完成"};

export function deploy_done(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
