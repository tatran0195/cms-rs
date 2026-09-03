import { getLocale } from '../runtime.js';

const translations = {"ar":"تم تفويض GitHub باسم","bn":"GitHub হিসাবে অনুমোদিত৷","de":"GitHub autorisiert als","en":"GitHub authorized as","es":"GitHub autorizado como","fr":"GitHub autorisé comme","hi":"GitHub के रूप में अधिकृत","id":"GitHub diotorisasi sebagai","pt-BR":"GitHub autorizado como","ru":"GitHub авторизован как","ur":"GitHub بطور مجاز","zh-CN":"GitHub 授权为"};

export function settings_git_workflow_authorizedas(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
