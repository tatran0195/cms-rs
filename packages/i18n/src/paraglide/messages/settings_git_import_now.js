import { getLocale } from '../runtime.js';

const translations = {"ar":"استيراد الآن","bn":"এখন আমদানি করুন","de":"Jetzt importieren","en":"Import now","es":"Importar ahora","fr":"Importer maintenant","hi":"अभी आयात करें","id":"Impor sekarang","pt-BR":"Importar agora","ru":"Импортировать сейчас","ur":"ابھی درآمد کریں۔","zh-CN":"立即导入"};

export function settings_git_import_now(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
