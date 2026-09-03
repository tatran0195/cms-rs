import { getLocale } from '../runtime.js';

const translations = {"ar":"نجح","bn":"সফল","de":"gelungen","en":"succeeded","es":"tuvo éxito","fr":"réussi","hi":"सफल हुआ","id":"berhasil","pt-BR":"sucesso","ru":"удалось","ur":"کامیاب","zh-CN":"成功了"};

export function settings_exports_workflow_status_succeeded(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
