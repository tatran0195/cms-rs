import { getLocale } from '../runtime.js';

const translations = {"ar":"تصدير PDF","bn":"PDF রপ্তানি","de":"PDF exportieren","en":"PDF export","es":"PDF exportar","fr":"PDF exportation","hi":"PDF निर्यात","id":"PDF ekspor","pt-BR":"PDF exportação","ru":"PDF экспорт","ur":"PDF برآمد کریں۔","zh-CN":"PDF 导出"};

export function settings_exports_pdf_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
