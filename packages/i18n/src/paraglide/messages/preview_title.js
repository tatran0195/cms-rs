import { getLocale } from '../runtime.js';

const translations = {"ar":"معاينة المسودة","bn":"খসড়া পূর্বরূপ","de":"Entwurfsvorschau","en":"Draft preview","es":"Vista previa del borrador","fr":"Aperçu du brouillon","hi":"ड्राफ्ट पूर्वावलोकन","id":"Pratinjau draf","pt-BR":"Visualização do rascunho","ru":"Предварительный просмотр черновика","ur":"ڈرافٹ کا پیش نظارہ","zh-CN":"草稿预览"};

export function preview_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
