import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد زيارات بعد.","bn":"এখনো কোনো ট্রাফিক নেই।","de":"Noch kein Verkehr.","en":"No traffic yet.","es":"Aún no hay tráfico.","fr":"Pas encore de trafic.","hi":"अभी तक कोई ट्रैफ़िक नहीं है.","id":"Belum ada lalu lintas.","pt-BR":"Ainda não há trânsito.","ru":"Пробок пока нет.","ur":"ابھی تک کوئی ٹریفک نہیں ہے۔","zh-CN":"还没有流量。"};

export function analytics_traffic_notrafficshort(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
