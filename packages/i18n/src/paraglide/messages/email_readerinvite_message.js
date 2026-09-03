import { getLocale } from '../runtime.js';

const translations = {"ar":"تمت دعوتك لقراءة {projectName}.","bn":"You were invited to read {projectName}.","de":"You were invited to read {projectName}.","en":"You were invited to read {projectName}.","es":"You were invited to read {projectName}.","fr":"You were invited to read {projectName}.","hi":"You were invited to read {projectName}.","id":"You were invited to read {projectName}.","pt-BR":"You were invited to read {projectName}.","ru":"You were invited to read {projectName}.","ur":"You were invited to read {projectName}.","zh-CN":"You were invited to read {projectName}."};

export function email_readerinvite_message(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
