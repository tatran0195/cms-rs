import { getLocale } from '../runtime.js';

const translations = {"ar":"الاستيراد من","bn":"থেকে আমদানি করুন","de":"Importieren von","en":"Import from","es":"Importar desde","fr":"Importer depuis","hi":"से आयात करें","id":"Impor dari","pt-BR":"Importar de","ru":"Импортировать из","ur":"سے درآمد کریں۔","zh-CN":"导入自"};

export function settings_git_workflow_importfrom(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
