import { getLocale } from '../runtime.js';

const translations = {"ar":"يقدم GitBook سيرًا ناضجًا، وتوثيقه يشرح تعريب الواجهة والنسخ اللغوية، لكنه لا يقدّم ضمانًا صريحًا لكل كتل RTL؛ نفّذ تجربة عربية قبل العقد.","bn":"Arabic page content","de":"Arabic page content","en":"يقدم GitBook سيرًا ناضجًا، وتوثيقه يشرح تعريب الواجهة والنسخ اللغوية، لكنه لا يقدّم ضمانًا صريحًا لكل كتل RTL؛ نفّذ تجربة عربية قبل العقد.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_comparison_recommendationgitbookbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
