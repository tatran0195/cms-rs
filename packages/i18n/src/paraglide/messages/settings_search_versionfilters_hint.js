import { getLocale } from '../runtime.js';

const translations = {"ar":"اسمح للقراء بحصر النتائج في إصدار توثيق محدد.","bn":"Let readers limit results to a documentation version.","de":"Let readers limit results to a documentation version.","en":"Let readers limit results to a documentation version.","es":"Let readers limit results to a documentation version.","fr":"Let readers limit results to a documentation version.","hi":"Let readers limit results to a documentation version.","id":"Let readers limit results to a documentation version.","pt-BR":"Let readers limit results to a documentation version.","ru":"Let readers limit results to a documentation version.","ur":"Let readers limit results to a documentation version.","zh-CN":"Let readers limit results to a documentation version."};

export function settings_search_versionfilters_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
