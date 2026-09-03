import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر قياس هذه القيمة، ولم تُحسب كصفر.","bn":"This value could not be measured. It has not been counted as zero.","de":"This value could not be measured. It has not been counted as zero.","en":"This value could not be measured. It has not been counted as zero.","es":"This value could not be measured. It has not been counted as zero.","fr":"This value could not be measured. It has not been counted as zero.","hi":"This value could not be measured. It has not been counted as zero.","id":"This value could not be measured. It has not been counted as zero.","pt-BR":"This value could not be measured. It has not been counted as zero.","ru":"This value could not be measured. It has not been counted as zero.","ur":"This value could not be measured. It has not been counted as zero.","zh-CN":"This value could not be measured. It has not been counted as zero."};

export function settings_usage_unknownExplanation(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
