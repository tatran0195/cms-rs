import { getLocale } from '../runtime.js';

const translations = {"ar":"حلّ التعارضات المفتوحة أعلاه قبل بدء مزامنة أخرى.","bn":"অন্য সিঙ্ক শুরু করার আগে উপরের খোলা বিরোধগুলি সমাধান করুন।","de":"Lösen Sie die oben genannten offenen Konflikte, bevor Sie eine weitere Synchronisierung starten.","en":"Resolve the open conflicts above before starting another sync.","es":"Resuelva los conflictos abiertos anteriores antes de iniciar otra sincronización.","fr":"Résolvez les conflits ouverts ci-dessus avant de démarrer une autre synchronisation.","hi":"दूसरा सिंक शुरू करने से पहले उपरोक्त खुले विरोधों का समाधान करें।","id":"Selesaikan konflik terbuka di atas sebelum memulai sinkronisasi lainnya.","pt-BR":"Resolva os conflitos abertos acima antes de iniciar outra sincronização.","ru":"Устраните открытые конфликты, описанные выше, прежде чем начинать новую синхронизацию.","ur":"دوسری مطابقت پذیری شروع کرنے سے پہلے اوپر کھلے تنازعات کو حل کریں۔","zh-CN":"在开始另一次同步之前解决上述未解决的冲突。"};

export function settings_git_workflow_resolvefirst(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
