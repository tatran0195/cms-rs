import { getLocale } from '../runtime.js';

const translations = {"ar":"يعتمد على سبب المغادرة. Nibleaf مناسب للاستضافة الكاملة وMarkdown والتحرير العربي. Docusaurus وMaterial for MkDocs مناسبان لفريق هندسي يريد مولدًا ثابتًا. Apidog مناسب أكثر لدورة حياة API. لا يوجد بديل واحد يكرر كل ميزات Mintlify.","bn":"Arabic page content","de":"Arabic page content","en":"يعتمد على سبب المغادرة. Nibleaf مناسب للاستضافة الكاملة وMarkdown والتحرير العربي. Docusaurus وMaterial for MkDocs مناسبان لفريق هندسي يريد مولدًا ثابتًا. Apidog مناسب أكثر لدورة حياة API. لا يوجد بديل واحد يكرر كل ميزات Mintlify.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_comparison_faqalternativeanswer(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
