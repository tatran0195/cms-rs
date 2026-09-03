import { getLocale } from '../runtime.js';

const translations = {"ar":"اسمح للقراء بحصر النتائج في لغة توثيق محددة.","bn":"Let readers limit results to a documentation language.","de":"Let readers limit results to a documentation language.","en":"Let readers limit results to a documentation language.","es":"Let readers limit results to a documentation language.","fr":"Let readers limit results to a documentation language.","hi":"Let readers limit results to a documentation language.","id":"Let readers limit results to a documentation language.","pt-BR":"Let readers limit results to a documentation language.","ru":"Let readers limit results to a documentation language.","ur":"Let readers limit results to a documentation language.","zh-CN":"Let readers limit results to a documentation language."};

export function settings_search_filters_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
