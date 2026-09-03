import { getLocale } from '../runtime.js';

const translations = {"ar":"وُضعت عملية الأرشفة في قائمة الانتظار.","bn":"সংরক্ষণাগার রান সারিবদ্ধ.","de":"Archivlauf steht in der Warteschlange.","en":"Archive run queued.","es":"Ejecución de archivo en cola.","fr":"L'exécution de l'archive a été mise en file d'attente.","hi":"पुरालेख संचालन कतारबद्ध.","id":"Proses arsip dalam antrean.","pt-BR":"Execução de arquivo na fila.","ru":"Запуск архива поставлен в очередь.","ur":"آرکائیو رن قطار میں ہے۔","zh-CN":"存档运行已排队。"};

export function settings_exports_workflow_runqueued(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
