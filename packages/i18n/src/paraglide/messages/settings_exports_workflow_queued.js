import { getLocale } from '../runtime.js';

const translations = {"ar":"وُضع تصدير أحدث مراجعة منشورة في قائمة الانتظار.","bn":"সর্বশেষ প্রকাশিত সংশোধন থেকে রপ্তানি সারিবদ্ধ।","de":"Der Export der letzten veröffentlichten Revision wurde in die Warteschlange gestellt.","en":"Export queued from the latest published revision.","es":"Exportación en cola desde la última revisión publicada.","fr":"Exportation en file d'attente à partir de la dernière révision publiée.","hi":"नवीनतम प्रकाशित संशोधन से निर्यात कतारबद्ध।","id":"Ekspor antri dari revisi terbaru yang diterbitkan.","pt-BR":"Exportação na fila da última revisão publicada.","ru":"Экспорт поставлен в очередь из последней опубликованной версии.","ur":"تازہ ترین شائع شدہ نظرثانی سے قطار میں برآمد کریں۔","zh-CN":"从最新发布的修订版中导出排队。"};

export function settings_exports_workflow_queued(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
