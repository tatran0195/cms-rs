import { getLocale } from '../runtime.js';

const translations = {"ar":"تم نشر {projectName} — الإصدار {version} متاح الآن","bn":"{projectName} published — v{version} is live","de":"{projectName} published — v{version} is live","en":"{projectName} published — v{version} is live","es":"{projectName} published — v{version} is live","fr":"{projectName} published — v{version} is live","hi":"{projectName} published — v{version} is live","id":"{projectName} published — v{version} is live","pt-BR":"{projectName} published — v{version} is live","ru":"{projectName} published — v{version} is live","ur":"{projectName} published — v{version} is live","zh-CN":"{projectName} published — v{version} is live"};

export function email_deployment_ready_subject(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
