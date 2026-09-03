import { getLocale } from '../runtime.js';

const translations = {"ar":"الصحة والمعاينات وعمليات التشغيل الأخيرة","bn":"স্বাস্থ্য, পূর্বরূপ, এবং সাম্প্রতিক রান","de":"Zustand, Vorschauen und aktuelle Läufe","en":"Health, previews, and recent runs","es":"Estado, vistas previas y ejecuciones recientes","fr":"État de santé, aperçus et exécutions récentes","hi":"स्वास्थ्य, पूर्वावलोकन और हालिया रन","id":"Kesehatan, pratinjau, dan proses terkini","pt-BR":"Saúde, visualizações e execuções recentes","ru":"Здоровье, предварительный просмотр и последние запуски","ur":"صحت، پیش نظارہ، اور حالیہ رنز","zh-CN":"运行状况、预览和最近运行"};

export function settings_git_workflow_nav_overviewdesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
