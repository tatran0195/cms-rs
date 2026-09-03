import { getLocale } from '../runtime.js';

const translations = {"ar":"فشل نشر {projectName} (الإصدار {version})","bn":"{projectName} publish failed (v{version})","de":"{projectName} publish failed (v{version})","en":"{projectName} publish failed (v{version})","es":"{projectName} publish failed (v{version})","fr":"{projectName} publish failed (v{version})","hi":"{projectName} publish failed (v{version})","id":"{projectName} publish failed (v{version})","pt-BR":"{projectName} publish failed (v{version})","ru":"{projectName} publish failed (v{version})","ur":"{projectName} publish failed (v{version})","zh-CN":"{projectName} publish failed (v{version})"};

export function email_deployment_failed_subject(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
