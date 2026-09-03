import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد منصة واحدة أفضل للجميع. Nibleaf مناسب لفريق يريد محررًا بصريًا فوق Markdown ودعمًا عربيًا كاملاً وخيار استضافة ذاتية. Mintlify أقوى في الذكاء الاصطناعي المُدار، وGitBook ناضج في التعاون المؤسسي، وDocusaurus وMaterial for MkDocs يمنحان الفريق الهندسي تحكمًا واسعًا، وApidog يتفوق عندما تكون دورة حياة API هي المشكلة الأساسية.","bn":"Arabic page content","de":"Arabic page content","en":"لا توجد منصة واحدة أفضل للجميع. Nibleaf مناسب لفريق يريد محررًا بصريًا فوق Markdown ودعمًا عربيًا كاملاً وخيار استضافة ذاتية. Mintlify أقوى في الذكاء الاصطناعي المُدار، وGitBook ناضج في التعاون المؤسسي، وDocusaurus وMaterial for MkDocs يمنحان الفريق الهندسي تحكمًا واسعًا، وApidog يتفوق عندما تكون دورة حياة API هي المشكلة الأساسية.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_comparison_intro(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
