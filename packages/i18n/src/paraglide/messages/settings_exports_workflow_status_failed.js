import { getLocale } from '../runtime.js';

const translations = {"ar":"فشل","bn":"ব্যর্থ","de":"gescheitert","en":"failed","es":"falló","fr":"échoué","hi":"विफल","id":"gagal","pt-BR":"falhou","ru":"не удалось","ur":"ناکام","zh-CN":"失败了"};

export function settings_exports_workflow_status_failed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
