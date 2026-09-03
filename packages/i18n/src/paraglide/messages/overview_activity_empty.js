import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد عمليات نشر بعد.","bn":"এখনও কোন স্থাপনা.","de":"Noch keine Bereitstellungen.","en":"No deployments yet.","es":"Aún no hay implementaciones.","fr":"Aucun déploiement pour l'instant.","hi":"अभी तक कोई तैनाती नहीं है.","id":"Belum ada penerapan.","pt-BR":"Nenhuma implantação ainda.","ru":"Развертываний пока нет.","ur":"ابھی تک کوئی تعیناتی نہیں ہے۔","zh-CN":"尚未部署。"};

export function overview_activity_empty(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
