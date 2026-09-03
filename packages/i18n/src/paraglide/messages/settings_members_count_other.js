import { getLocale } from '../runtime.js';

const translations = {"ar":"{count} أعضاء","bn":"{count} সদস্য","de":"{count} Mitglieder","en":"{count} members","es":"{count} miembros","fr":"{count} membres","hi":"{count} सदस्य","id":"{count} anggota","pt-BR":"{count} membros","ru":"{count} участников","ur":"{count} اراکین","zh-CN":"{count} 成员"};

export function settings_members_count_other(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
