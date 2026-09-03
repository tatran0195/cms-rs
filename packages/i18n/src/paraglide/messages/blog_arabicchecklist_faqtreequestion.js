import { getLocale } from '../runtime.js';

const translations = {"ar":"هل يجب أن تطابق شجرة الصفحات العربية الشجرة الإنجليزية؟","bn":"Must the Arabic page tree match the English tree?","de":"Must the Arabic page tree match the English tree?","en":"Must the Arabic page tree match the English tree?","es":"Must the Arabic page tree match the English tree?","fr":"Must the Arabic page tree match the English tree?","hi":"Must the Arabic page tree match the English tree?","id":"Must the Arabic page tree match the English tree?","pt-BR":"Must the Arabic page tree match the English tree?","ru":"Must the Arabic page tree match the English tree?","ur":"Must the Arabic page tree match the English tree?","zh-CN":"Must the Arabic page tree match the English tree?"};

export function blog_arabicchecklist_faqtreequestion(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
