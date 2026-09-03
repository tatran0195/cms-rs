import { getLocale } from '../runtime.js';

const translations = {"ar":"المعاينة","bn":"পূর্বরূপ","de":"Vorschau","en":"Preview","es":"Vista previa","fr":"Aperçu","hi":"पूर्वावलोकन","id":"Pratinjau","pt-BR":"Visualização","ru":"Предварительный просмотр","ur":"پیش نظارہ","zh-CN":"预览"};

export function settings_git_workflow_preview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
