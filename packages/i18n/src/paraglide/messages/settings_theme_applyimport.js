import { getLocale } from '../runtime.js';

const translations = {"ar":"تطبيق على المسودة","bn":"খসড়াতে আবেদন করুন","de":"Auf Entwurf bewerben","en":"Apply to draft","es":"Aplicar al borrador","fr":"Appliquer au brouillon","hi":"ड्राफ्ट के लिए आवेदन करें","id":"Terapkan ke draf","pt-BR":"Aplicar ao rascunho","ru":"Подать заявку на черновик","ur":"مسودے کے لیے درخواست دیں۔","zh-CN":"申请草稿"};

export function settings_theme_applyimport(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
