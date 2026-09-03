import { getLocale } from '../runtime.js';

const translations = {"ar":"تم نشر الإصدار {version} من {projectName} بنجاح.","bn":"{projectName} version {version} published successfully.","de":"{projectName} version {version} published successfully.","en":"{projectName} version {version} published successfully.","es":"{projectName} version {version} published successfully.","fr":"{projectName} version {version} published successfully.","hi":"{projectName} version {version} published successfully.","id":"{projectName} version {version} published successfully.","pt-BR":"{projectName} version {version} published successfully.","ru":"{projectName} version {version} published successfully.","ur":"{projectName} version {version} published successfully.","zh-CN":"{projectName} version {version} published successfully."};

export function email_deployment_ready_preview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
