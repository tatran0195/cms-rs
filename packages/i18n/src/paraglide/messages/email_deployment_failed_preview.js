import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر نشر الإصدار {version} من {projectName}.","bn":"{projectName} version {version} did not publish.","de":"{projectName} version {version} did not publish.","en":"{projectName} version {version} did not publish.","es":"{projectName} version {version} did not publish.","fr":"{projectName} version {version} did not publish.","hi":"{projectName} version {version} did not publish.","id":"{projectName} version {version} did not publish.","pt-BR":"{projectName} version {version} did not publish.","ru":"{projectName} version {version} did not publish.","ur":"{projectName} version {version} did not publish.","zh-CN":"{projectName} version {version} did not publish."};

export function email_deployment_failed_preview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
