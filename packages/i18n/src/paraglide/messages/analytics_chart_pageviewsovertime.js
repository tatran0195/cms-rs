import { getLocale } from '../runtime.js';

const translations = {"ar":"مشاهدات الصفحة عبر الزمن","bn":"সময়ের সাথে সাথে পৃষ্ঠা দেখা","de":"Seitenaufrufe im Zeitverlauf","en":"Page views over time","es":"Vistas de página a lo largo del tiempo","fr":"Pages vues au fil du temps","hi":"समय के साथ पृष्ठ दृश्य","id":"Tampilan halaman dari waktu ke waktu","pt-BR":"Visualizações de página ao longo do tempo","ru":"Просмотры страниц с течением времени","ur":"وقت کے ساتھ صفحہ کے ملاحظات","zh-CN":"随着时间的推移页面浏览量"};

export function analytics_chart_pageviewsovertime(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
