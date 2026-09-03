import { getLocale } from '../runtime.js';

const translations = {"ar":"استخدام Nibleaf","bn":"Nibleaf ব্যবহার করুন","de":"Verwenden Sie Nibleaf","en":"Use Nibleaf","es":"Utilice Nibleaf","fr":"Utilisez Nibleaf","hi":"Nibleaf का उपयोग करें","id":"Gunakan Nibleaf","pt-BR":"Usar Nibleaf","ru":"Используйте Nibleaf","ur":"استعمال کریں Nibleaf","zh-CN":"使用 Nibleaf"};

export function settings_git_workflow_conflict_usenibleaf(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
