import { getLocale } from '../runtime.js';

const translations = {"ar":"سير عمل النشر","bn":"প্রকাশনা কর্মপ্রবাহ","de":"Veröffentlichungsablauf","en":"Publishing workflow","es":"Flujo de publicación","fr":"Flux de publication","hi":"प्रकाशन कार्यप्रवाह","id":"Alur penerbitan","pt-BR":"Fluxo de publicação","ru":"Процесс публикации","ur":"اشاعت کا طریقۂ کار","zh-CN":"发布工作流"};

export function settings_addons_group_publishing_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
