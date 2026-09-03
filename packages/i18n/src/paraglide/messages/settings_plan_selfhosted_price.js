import { getLocale } from '../runtime.js';

const translations = {"ar":"بيتا","bn":"বিটা","de":"Beta","en":"beta","es":"beta","fr":"bêta","hi":"बीटा","id":"beta","pt-BR":"beta","ru":"бета","ur":"بیٹا","zh-CN":"贝塔"};

export function settings_plan_selfhosted_price(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
