import { getLocale } from '../runtime.js';

const translations = {"ar":"استيراد المستندات الحالية","bn":"বিদ্যমান নথি আমদানি করুন","de":"Vorhandene Dokumente importieren","en":"Import existing docs","es":"Importar documentos existentes","fr":"Importer des documents existants","hi":"मौजूदा दस्तावेज़ आयात करें","id":"Impor dokumen yang ada","pt-BR":"Importe documentos existentes","ru":"Импортировать существующие документы","ur":"موجودہ دستاویزات درآمد کریں۔","zh-CN":"导入现有文档"};

export function settings_git_workflow_importexisting(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
