import { getLocale } from '../runtime.js';

const translations = {"ar":"النتائج","bn":"ফলাফল","de":"Ergebnisse","en":"Results","es":"Resultados","fr":"Résultats","hi":"परिणाम","id":"Hasil","pt-BR":"Resultados","ru":"Результаты","ur":"نتائج","zh-CN":"结果"};

export function site_results(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
