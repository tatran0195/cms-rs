import { getLocale } from '../runtime.js';

const translations = {"ar":"خط أفقي فاصل.","bn":"একটি অনুভূমিক নিয়ম।","de":"Eine horizontale Regel.","en":"A horizontal rule.","es":"Una regla horizontal.","fr":"Une règle horizontale.","hi":"एक क्षैतिज नियम.","id":"Aturan horisontal.","pt-BR":"Uma regra horizontal.","ru":"Горизонтальное правило.","ur":"ایک افقی اصول۔","zh-CN":"水平规则。"};

export function editor_slash_divider_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
