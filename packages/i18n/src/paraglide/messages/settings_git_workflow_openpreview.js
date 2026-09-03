import { getLocale } from '../runtime.js';

const translations = {"ar":"فتح المعاينة","bn":"পূর্বরূপ খুলুন","de":"Vorschau öffnen","en":"Open preview","es":"Abrir vista previa","fr":"Ouvrir l'aperçu","hi":"पूर्वावलोकन खोलें","id":"Buka pratinjau","pt-BR":"Abrir visualização","ru":"Открыть предварительный просмотр","ur":"پیش نظارہ کھولیں۔","zh-CN":"打开预览"};

export function settings_git_workflow_openpreview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
