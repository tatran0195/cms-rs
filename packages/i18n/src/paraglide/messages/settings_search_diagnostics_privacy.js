import { getLocale } from '../runtime.js';

const translations = {"ar":"تظهر فقط المعرّفات والترتيب واللغة والإصدار والحالة والرموز الثابتة. لا يُعرض المحتوى أو المتجهات مطلقًا.","bn":"Only identifiers, ordinal, language, version, status, and stable codes are shown. Content and vectors are never exposed.","de":"Only identifiers, ordinal, language, version, status, and stable codes are shown. Content and vectors are never exposed.","en":"Only identifiers, ordinal, language, version, status, and stable codes are shown. Content and vectors are never exposed.","es":"Only identifiers, ordinal, language, version, status, and stable codes are shown. Content and vectors are never exposed.","fr":"Only identifiers, ordinal, language, version, status, and stable codes are shown. Content and vectors are never exposed.","hi":"Only identifiers, ordinal, language, version, status, and stable codes are shown. Content and vectors are never exposed.","id":"Only identifiers, ordinal, language, version, status, and stable codes are shown. Content and vectors are never exposed.","pt-BR":"Only identifiers, ordinal, language, version, status, and stable codes are shown. Content and vectors are never exposed.","ru":"Only identifiers, ordinal, language, version, status, and stable codes are shown. Content and vectors are never exposed.","ur":"Only identifiers, ordinal, language, version, status, and stable codes are shown. Content and vectors are never exposed.","zh-CN":"Only identifiers, ordinal, language, version, status, and stable codes are shown. Content and vectors are never exposed."};

export function settings_search_diagnostics_privacy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
