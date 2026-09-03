import { getLocale } from '../runtime.js';

const translations = {"ar":"تسوية التعارضات","bn":"দ্বন্দ্ব মিটমাট","de":"Konflikte beilegen","en":"Reconcile conflicts","es":"Conciliar conflictos","fr":"Réconcilier les conflits","hi":"विवादों में सामंजस्य स्थापित करें","id":"Rekonsiliasi konflik","pt-BR":"Reconciliar conflitos","ru":"Урегулировать конфликты","ur":"تنازعات کو حل کریں۔","zh-CN":"调和冲突"};

export function settings_git_workflow_conflict_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
