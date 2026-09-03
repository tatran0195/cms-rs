import { getLocale } from '../runtime.js';

const translations = {"ar":"{count} عضو","bn":"{count} সদস্য","de":"{count} Mitglied","en":"{count} member","es":"{count} miembro","fr":"Membre {count}","hi":"{count} सदस्य","id":"{count} anggota","pt-BR":"{count} membro","ru":"{count} участник","ur":"{count} ممبر","zh-CN":"{count} 成员"};

export function settings_members_count_one(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
