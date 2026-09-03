import { getLocale } from '../runtime.js';

const translations = {"ar":"استيراد من {provider}","bn":"{provider} থেকে আমদানি করুন","de":"Import aus {provider}","en":"Import from {provider}","es":"Importar desde {provider}","fr":"Importer depuis {provider}","hi":"{provider} से आयात करें","id":"Impor dari {provider}","pt-BR":"Importar de {provider}","ru":"Импорт из {provider}","ur":"{provider} سے درآمد کریں","zh-CN":"从 {provider} 导入"};

export function settings_git_import_button(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
