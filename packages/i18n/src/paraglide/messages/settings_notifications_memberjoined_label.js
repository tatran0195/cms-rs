import { getLocale } from '../runtime.js';

const translations = {"ar":"انضمّ عضو","bn":"সদস্য যোগদান করেন","de":"Mitglied ist beigetreten","en":"Member joined","es":"Miembro unido","fr":"Membre rejoint","hi":"सदस्य शामिल हुए","id":"Anggota bergabung","pt-BR":"Membro entrou","ru":"Участник присоединился","ur":"ممبر شامل ہوئے۔","zh-CN":"会员加入"};

export function settings_notifications_memberjoined_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
