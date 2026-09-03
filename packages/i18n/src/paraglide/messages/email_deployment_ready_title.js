import { getLocale } from '../runtime.js';

const translations = {"ar":"{projectName} متاح الآن","bn":"{projectName} is live","de":"{projectName} is live","en":"{projectName} is live","es":"{projectName} is live","fr":"{projectName} is live","hi":"{projectName} is live","id":"{projectName} is live","pt-BR":"{projectName} is live","ru":"{projectName} is live","ur":"{projectName} is live","zh-CN":"{projectName} is live"};

export function email_deployment_ready_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
