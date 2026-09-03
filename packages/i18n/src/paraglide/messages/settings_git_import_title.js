import { getLocale } from '../runtime.js';

const translations = {"ar":"استيراد المحتوى","bn":"সামগ্রী আমদানি করুন","de":"Inhalte importieren","en":"Import content","es":"Importar contenido","fr":"Importer du contenu","hi":"सामग्री आयात करें","id":"Impor konten","pt-BR":"Importar conteúdo","ru":"Импортировать контент","ur":"مواد درآمد کریں۔","zh-CN":"导入内容"};

export function settings_git_import_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
