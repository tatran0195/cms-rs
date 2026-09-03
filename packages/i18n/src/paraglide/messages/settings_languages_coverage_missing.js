import { getLocale } from '../runtime.js';

const translations = {"ar":"{count} مفقودة","bn":"{count} অনুপস্থিত","de":"{count} fehlt","en":"{count} missing","es":"{count} falta","fr":"{count} manquant","hi":"{count} गुम है","id":"{count} hilang","pt-BR":"{count} ausente","ru":"{count} отсутствует","ur":"{count} غائب ہے۔","zh-CN":"{count} 缺失"};

export function settings_languages_coverage_missing(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
