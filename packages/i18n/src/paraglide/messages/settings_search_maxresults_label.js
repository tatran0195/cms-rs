import { getLocale } from '../runtime.js';

const translations = {"ar":"النتائج لكل بحث","bn":"ক্যোয়ারী প্রতি ফলাফল","de":"Ergebnisse pro Abfrage","en":"Results per query","es":"Resultados por consulta","fr":"Résultats par requête","hi":"प्रति क्वेरी परिणाम","id":"Hasil per kueri","pt-BR":"Resultados por consulta","ru":"Результаты по запросу","ur":"نتائج فی استفسار","zh-CN":"每个查询的结果"};

export function settings_search_maxresults_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
