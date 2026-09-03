import { getLocale } from '../runtime.js';

const translations = {"ar":"{count} عمليات","bn":"{count} রান","de":"{count} wird ausgeführt","en":"{count} runs","es":"{count} se ejecuta","fr":"{count} s'exécute","hi":"{count} चलता है","id":"{count} berjalan","pt-BR":"{count} é executado","ru":"{count} выполняется","ur":"{count} رنز","zh-CN":"{count} 运行"};

export function settings_exports_workflow_runcount(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
