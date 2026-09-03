import { getLocale } from '../runtime.js';

const translations = {"ar":"العودة إلى الملخص","bn":"সারাংশে ফিরে যান","de":"Zurück zur Zusammenfassung","en":"Back to summary","es":"Volver al resumen","fr":"Retour au résumé","hi":"सारांश पर वापस जाएँ","id":"Kembali ke ringkasan","pt-BR":"Voltar ao resumo","ru":"Вернуться к сводке","ur":"خلاصہ پر واپس جائیں۔","zh-CN":"返回总结"};

export function publish_backtosummary(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
