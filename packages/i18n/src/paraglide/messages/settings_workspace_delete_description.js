import { getLocale } from '../runtime.js';

const translations = {"ar":"هل تريد حذف مساحة العمل هذه وجميع مواقعها؟ لا يمكن التراجع عن هذا الإجراء.","bn":"এই ওয়ার্কস্পেস এবং এর সমস্ত সাইট মুছবেন? এটি পূর্বাবস্থায় ফেরানো যাবে না।","de":"Diesen Arbeitsbereich und alle seine Websites löschen? Dies kann nicht rückgängig gemacht werden.","en":"Delete this workspace and all of its sites? This cannot be undone.","es":"¿Eliminar este espacio de trabajo y todos sus sitios? Esto no se puede deshacer.","fr":"Supprimer cet espace de travail et tous ses sites ? Cela ne peut pas être annulé.","hi":"यह कार्यस्थान और इसकी सभी साइटें हटाएं? इसे असंपादित नहीं किया जा सकता है।","id":"Hapus ruang kerja ini dan semua situsnya? Hal ini tidak dapat dibatalkan.","pt-BR":"Excluir este espaço de trabalho e todos os seus sites? Isto não pode ser desfeito.","ru":"Удалить это рабочее пространство и все его сайты? Это невозможно отменить.","ur":"اس ورک اسپیس اور اس کی تمام سائٹس کو حذف کریں؟ اسے کالعدم نہیں کیا جا سکتا۔","zh-CN":"删除此工作区及其所有站点吗？此操作无法撤消。"};

export function settings_workspace_delete_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
