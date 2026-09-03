import { getLocale } from '../runtime.js';

const translations = {"ar":"{count} صفحة مصدر","bn":"{count} উৎস পৃষ্ঠা","de":"{count} Quellseiten","en":"{count} source pages","es":"{count} páginas fuente","fr":"{count} pages sources","hi":"{count} स्रोत पृष्ठ","id":"{count} halaman sumber","pt-BR":"{count} páginas de origem","ru":"{count} исходных страниц","ur":"{count} ماخذ صفحات","zh-CN":"{count} 源页面"};

export function settings_languages_coverage_sourcepages(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
