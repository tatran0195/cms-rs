import { getLocale } from '../runtime.js';

const translations = {"ar":"العودة إلى اللغات المقترحة","bn":"প্রস্তাবিত ভাষায় ফিরে যান","de":"Zurück zu den vorgeschlagenen Sprachen","en":"Back to suggested languages","es":"Volver a idiomas sugeridos","fr":"Retour aux langues suggérées","hi":"सुझाई गई भाषाओं पर वापस जाएँ","id":"Kembali ke bahasa yang disarankan","pt-BR":"Voltar aos idiomas sugeridos","ru":"Вернуться к предлагаемым языкам","ur":"تجویز کردہ زبانوں پر واپس جائیں۔","zh-CN":"返回建议语言"};

export function editor_addlanguage_backtocatalog(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
