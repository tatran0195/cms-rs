import { getLocale } from '../runtime.js';

const translations = {"ar":"انضم {memberName} للتو إلى {organizationName} ويمكنه الآن التعاون في توثيقها.","bn":"{memberName} just joined {organizationName} and can now collaborate on its documentation.","de":"{memberName} just joined {organizationName} and can now collaborate on its documentation.","en":"{memberName} just joined {organizationName} and can now collaborate on its documentation.","es":"{memberName} just joined {organizationName} and can now collaborate on its documentation.","fr":"{memberName} just joined {organizationName} and can now collaborate on its documentation.","hi":"{memberName} just joined {organizationName} and can now collaborate on its documentation.","id":"{memberName} just joined {organizationName} and can now collaborate on its documentation.","pt-BR":"{memberName} just joined {organizationName} and can now collaborate on its documentation.","ru":"{memberName} just joined {organizationName} and can now collaborate on its documentation.","ur":"{memberName} just joined {organizationName} and can now collaborate on its documentation.","zh-CN":"{memberName} just joined {organizationName} and can now collaborate on its documentation."};

export function email_memberjoined_message(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
