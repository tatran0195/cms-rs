import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر عضوًا","bn":"একজন সদস্য নির্বাচন করুন","de":"Wählen Sie ein Mitglied","en":"Choose a member","es":"Elige un miembro","fr":"Choisissez un membre","hi":"एक सदस्य चुनें","id":"Pilih anggota","pt-BR":"Escolha um membro","ru":"Выберите участника","ur":"ایک ممبر کا انتخاب کریں۔","zh-CN":"选择会员"};

export function settings_danger_transfer_placeholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
