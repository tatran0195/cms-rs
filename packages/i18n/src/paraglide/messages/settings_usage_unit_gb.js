import { getLocale } from '../runtime.js';

const translations = {"ar":"{value} غيغابايت","bn":"{value} জিবি","de":"{value} GB","en":"{value} GB","es":"{value} GB","fr":"{value} Go","hi":"{value} जीबी","id":"{value}GB","pt-BR":"{value} GB","ru":"{value} ГБ","ur":"{value} GB","zh-CN":"{value} GB"};

export function settings_usage_unit_gb(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
