import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر نشر الإصدار {version} من {projectName}.","bn":"Publishing version v{version} of {projectName} failed.","de":"Publishing version v{version} of {projectName} failed.","en":"Publishing version v{version} of {projectName} failed.","es":"Publishing version v{version} of {projectName} failed.","fr":"Publishing version v{version} of {projectName} failed.","hi":"Publishing version v{version} of {projectName} failed.","id":"Publishing version v{version} of {projectName} failed.","pt-BR":"Publishing version v{version} of {projectName} failed.","ru":"Publishing version v{version} of {projectName} failed.","ur":"Publishing version v{version} of {projectName} failed.","zh-CN":"Publishing version v{version} of {projectName} failed."};

export function email_deployment_failed_message(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
