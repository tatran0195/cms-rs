import { getLocale } from '../runtime.js';

const translations = {"ar":"{label} مطلوب","bn":"{label} প্রয়োজন","de":"{label} ist erforderlich","en":"{label} is required","es":"{label} es obligatorio","fr":"{label} est requis","hi":"{label} आवश्यक है","id":"{label} wajib diisi","pt-BR":"{label} é obrigatório","ru":"{label} требуется","ur":"{label} درکار ہے۔","zh-CN":"{label} 是必需的"};

export function validation_required(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
