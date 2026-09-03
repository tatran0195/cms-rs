import { getLocale } from '../runtime.js';

const translations = {"ar":"تصدير لمرة واحدة","bn":"এককালীন রপ্তানি","de":"Einmaliger Export","en":"One-time export","es":"Exportación única","fr":"Exportation unique","hi":"एकमुश्त निर्यात","id":"Ekspor satu kali","pt-BR":"Exportação única","ru":"Одноразовый экспорт","ur":"ایک بار برآمد","zh-CN":"一次性导出"};

export function settings_exports_workflow_onetime(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
