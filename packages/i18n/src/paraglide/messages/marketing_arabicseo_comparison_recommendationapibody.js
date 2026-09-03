import { getLocale } from '../runtime.js';

const translations = {"ar":"Apidog مناسب عندما تحتاج التصميم والمحاكاة والاختبار والتوثيق في منتج واحد. أما إن كان OpenAPI جزءًا من موقع وثائق منتج أوسع، فقارن بينه وبين مرجع Scalar المدمج في Nibleaf.","bn":"Arabic page content","de":"Arabic page content","en":"Apidog مناسب عندما تحتاج التصميم والمحاكاة والاختبار والتوثيق في منتج واحد. أما إن كان OpenAPI جزءًا من موقع وثائق منتج أوسع، فقارن بينه وبين مرجع Scalar المدمج في Nibleaf.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_comparison_recommendationapibody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
