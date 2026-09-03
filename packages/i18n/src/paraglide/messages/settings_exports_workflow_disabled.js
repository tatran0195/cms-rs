import { getLocale } from '../runtime.js';

const translations = {"ar":"معطّل","bn":"অক্ষম","de":"deaktiviert","en":"disabled","es":"discapacitado","fr":"désactivé","hi":"अक्षम","id":"dengan disabilitas","pt-BR":"desativado","ru":"отключен","ur":"معذور","zh-CN":"残疾人"};

export function settings_exports_workflow_disabled(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
