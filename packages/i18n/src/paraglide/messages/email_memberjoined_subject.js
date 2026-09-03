import { getLocale } from '../runtime.js';

const translations = {"ar":"انضم {memberName} إلى {organizationName}","bn":"{memberName} joined {organizationName}","de":"{memberName} joined {organizationName}","en":"{memberName} joined {organizationName}","es":"{memberName} joined {organizationName}","fr":"{memberName} joined {organizationName}","hi":"{memberName} joined {organizationName}","id":"{memberName} joined {organizationName}","pt-BR":"{memberName} joined {organizationName}","ru":"{memberName} joined {organizationName}","ur":"{memberName} joined {organizationName}","zh-CN":"{memberName} joined {organizationName}"};

export function email_memberjoined_subject(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
