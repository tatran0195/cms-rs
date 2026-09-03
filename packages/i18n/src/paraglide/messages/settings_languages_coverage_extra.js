import { getLocale } from '../runtime.js';

const translations = {"ar":"{count} خاصة بهذه اللغة","bn":"{count} শুধুমাত্র ভাষা","de":"{count} Nur Sprache","en":"{count} language-only","es":"{count} solo idioma","fr":"{count} langue uniquement","hi":"{count} केवल भाषा के लिए","id":"{count} hanya dalam bahasa","pt-BR":"{count} somente idioma","ru":"{count} только для языка","ur":"{count} صرف زبان","zh-CN":"{count} 仅语言"};

export function settings_languages_coverage_extra(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
