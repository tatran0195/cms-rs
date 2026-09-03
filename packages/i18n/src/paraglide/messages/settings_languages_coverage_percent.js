import { getLocale } from '../runtime.js';

const translations = {"ar":"اكتمال بنسبة {percent}٪","bn":"{percent}% কভারেজ","de":"{percent}% Abdeckung","en":"{percent}% coverage","es":"{percent}% de cobertura","fr":"Couverture de {percent} %","hi":"{percent}% कवरेज","id":"{percent}% cakupan","pt-BR":"{percent}% de cobertura","ru":"Покрытие {percent}%","ur":"{percent}% کوریج","zh-CN":"{percent}% 覆盖率"};

export function settings_languages_coverage_percent(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
