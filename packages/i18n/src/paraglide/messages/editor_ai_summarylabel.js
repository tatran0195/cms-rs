import { getLocale } from '../runtime.js';

const translations = {"ar":"الملخص","bn":"সারাংশ","de":"Zusammenfassung","en":"Summary","es":"Resumen","fr":"Résumé","hi":"सारांश","id":"Ringkasan","pt-BR":"Resumo","ru":"Резюме","ur":"خلاصہ","zh-CN":"总结"};

export function editor_ai_summarylabel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
