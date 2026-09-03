import { getLocale } from '../runtime.js';

const translations = {"ar":"تصدير {trigger} · {attempts} محاولات","bn":"{trigger} export · {attempts} attempts","de":"{trigger} export · {attempts} attempts","en":"{trigger} export · {attempts} attempts","es":"{trigger} export · {attempts} attempts","fr":"{trigger} export · {attempts} attempts","hi":"{trigger} export · {attempts} attempts","id":"{trigger} export · {attempts} attempts","pt-BR":"{trigger} export · {attempts} attempts","ru":"{trigger} export · {attempts} attempts","ur":"{trigger} export · {attempts} attempts","zh-CN":"{trigger} export · {attempts} attempts"};

export function admin_operations_exportsummary(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
