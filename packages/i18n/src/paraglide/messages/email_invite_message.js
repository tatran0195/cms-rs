import { getLocale } from '../runtime.js';

const translations = {"ar":"دعاك {inviterName} للتعاون في توثيق {organizationName} بصفتك {role}.","bn":"{inviterName} invited you to collaborate on documentation in {organizationName} as {role}.","de":"{inviterName} invited you to collaborate on documentation in {organizationName} as {role}.","en":"{inviterName} invited you to collaborate on documentation in {organizationName} as {role}.","es":"{inviterName} invited you to collaborate on documentation in {organizationName} as {role}.","fr":"{inviterName} invited you to collaborate on documentation in {organizationName} as {role}.","hi":"{inviterName} invited you to collaborate on documentation in {organizationName} as {role}.","id":"{inviterName} invited you to collaborate on documentation in {organizationName} as {role}.","pt-BR":"{inviterName} invited you to collaborate on documentation in {organizationName} as {role}.","ru":"{inviterName} invited you to collaborate on documentation in {organizationName} as {role}.","ur":"{inviterName} invited you to collaborate on documentation in {organizationName} as {role}.","zh-CN":"{inviterName} invited you to collaborate on documentation in {organizationName} as {role}."};

export function email_invite_message(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
