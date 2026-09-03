import { getLocale } from '../runtime.js';

const translations = {"ar":"تجريبية","bn":"পূর্বরূপ","de":"Vorschau","en":"Preview","es":"Vista previa","fr":"Aperçu","hi":"पूर्वावलोकन","id":"Pratinjau","pt-BR":"Pré-visualização","ru":"Предпросмотр","ur":"پیش منظر","zh-CN":"预览"};

export function settings_addons_availability_preview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
