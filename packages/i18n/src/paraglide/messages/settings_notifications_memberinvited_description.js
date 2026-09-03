import { getLocale } from '../runtime.js';

const translations = {"ar":"عند دعوة شخص ما إلى مساحة العمل.","bn":"যখন কাউকে কর্মক্ষেত্রে আমন্ত্রণ জানানো হয়।","de":"Wenn jemand zum Arbeitsbereich eingeladen wird.","en":"When someone is invited to the workspace.","es":"Cuando alguien es invitado al espacio de trabajo.","fr":"Quand quelqu'un est invité dans l'espace de travail.","hi":"जब किसी को कार्यस्थल पर आमंत्रित किया जाता है.","id":"Saat seseorang diundang ke ruang kerja.","pt-BR":"Quando alguém é convidado para o espaço de trabalho.","ru":"Когда кого-то приглашают в рабочее пространство.","ur":"جب کسی کو کام کی جگہ پر مدعو کیا جاتا ہے۔","zh-CN":"当有人被邀请到工作区时。"};

export function settings_notifications_memberinvited_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
