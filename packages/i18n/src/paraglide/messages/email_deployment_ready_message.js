import { getLocale } from '../runtime.js';

const translations = {"ar":"تم نشر الإصدار {version} من {projectName} بنجاح وأصبح متاحًا الآن.","bn":"Version v{version} of {projectName} published successfully and is now live.","de":"Version v{version} of {projectName} published successfully and is now live.","en":"Version v{version} of {projectName} published successfully and is now live.","es":"Version v{version} of {projectName} published successfully and is now live.","fr":"Version v{version} of {projectName} published successfully and is now live.","hi":"Version v{version} of {projectName} published successfully and is now live.","id":"Version v{version} of {projectName} published successfully and is now live.","pt-BR":"Version v{version} of {projectName} published successfully and is now live.","ru":"Version v{version} of {projectName} published successfully and is now live.","ur":"Version v{version} of {projectName} published successfully and is now live.","zh-CN":"Version v{version} of {projectName} published successfully and is now live."};

export function email_deployment_ready_message(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
