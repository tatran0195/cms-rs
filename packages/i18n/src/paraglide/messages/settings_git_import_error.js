import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر الاستيراد من Git","bn":"গিট থেকে আমদানি করা যায়নি","de":"Der Import aus Git war nicht möglich","en":"Could not import from Git","es":"No se pudo importar desde Git","fr":"Impossible d'importer depuis Git","hi":"Git से आयात नहीं किया जा सका","id":"Tidak dapat mengimpor dari Git","pt-BR":"Não foi possível importar do Git","ru":"Не удалось импортировать из Git","ur":"Git سے درآمد نہیں ہو سکا","zh-CN":"无法从 Git 导入"};

export function settings_git_import_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
