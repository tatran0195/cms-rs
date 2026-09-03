import { getLocale } from '../runtime.js';

const translations = {"ar":"استيراد آخر","bn":"আরেকটি আমদানি করুন","de":"Importieren Sie einen anderen","en":"Import another","es":"importar otro","fr":"Importer un autre","hi":"दूसरा आयात करें","id":"Impor yang lain","pt-BR":"Importar outro","ru":"Импортировать другой","ur":"دوسرا درآمد کریں۔","zh-CN":"导入另一个"};

export function settings_import_again(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
