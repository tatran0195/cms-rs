import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد عمليات تصدير بعد","bn":"এখনও রপ্তানি চলছে না","de":"Noch keine Exportläufe","en":"No export runs yet","es":"Aún no se realizan exportaciones","fr":"Aucune exportation n'est encore exécutée","hi":"अभी तक कोई निर्यात नहीं चलता","id":"Belum ada ekspor yang berjalan","pt-BR":"Nenhuma exportação foi executada ainda","ru":"Экспортных операций пока нет","ur":"ابھی تک کوئی ایکسپورٹ نہیں چلتی","zh-CN":"尚未运行导出"};

export function settings_exports_workflow_noruns(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
