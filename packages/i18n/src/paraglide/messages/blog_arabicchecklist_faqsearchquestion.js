import { getLocale } from '../runtime.js';

const translations = {"ar":"كيف أختبر البحث في وثائق عربية؟","bn":"How should I test search in Arabic documentation?","de":"How should I test search in Arabic documentation?","en":"How should I test search in Arabic documentation?","es":"How should I test search in Arabic documentation?","fr":"How should I test search in Arabic documentation?","hi":"How should I test search in Arabic documentation?","id":"How should I test search in Arabic documentation?","pt-BR":"How should I test search in Arabic documentation?","ru":"How should I test search in Arabic documentation?","ur":"How should I test search in Arabic documentation?","zh-CN":"How should I test search in Arabic documentation?"};

export function blog_arabicchecklist_faqsearchquestion(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
