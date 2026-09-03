import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر Docusaurus أو Material for MkDocs إذا كان فريقك هندسيًا بالكامل ويريد موقعًا ثابتًا يتحكم بكل سطر في بنائه.","bn":"Arabic page content","de":"Arabic page content","en":"اختر Docusaurus أو Material for MkDocs إذا كان فريقك هندسيًا بالكامل ويريد موقعًا ثابتًا يتحكم بكل سطر في بنائه.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_landing_alternativestatic(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
