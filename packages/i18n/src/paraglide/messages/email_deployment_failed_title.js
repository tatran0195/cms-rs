import { getLocale } from '../runtime.js';

const translations = {"ar":"فشل نشر {projectName}","bn":"{projectName} failed to publish","de":"{projectName} failed to publish","en":"{projectName} failed to publish","es":"{projectName} failed to publish","fr":"{projectName} failed to publish","hi":"{projectName} failed to publish","id":"{projectName} failed to publish","pt-BR":"{projectName} failed to publish","ru":"{projectName} failed to publish","ur":"{projectName} failed to publish","zh-CN":"{projectName} failed to publish"};

export function email_deployment_failed_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
