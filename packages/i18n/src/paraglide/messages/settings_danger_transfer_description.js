import { getLocale } from '../runtime.js';

const translations = {"ar":"اجعل عضوًا مقبولًا آخر مالكًا. سيتحوّل دورك إلى مدير.","bn":"অন্য একজন স্বীকৃত সদস্যকে মালিক করুন। আপনার ভূমিকা প্রশাসক পরিবর্তন.","de":"Machen Sie ein anderes akzeptiertes Mitglied zum Eigentümer. Ihre Rolle ändert sich in „Administrator“.","en":"Make another accepted member the owner. Your role changes to admin.","es":"Haga que otro miembro aceptado sea el propietario. Su rol cambia a administrador.","fr":"Faites d'un autre membre accepté le propriétaire. Votre rôle devient administrateur.","hi":"किसी अन्य स्वीकृत सदस्य को स्वामी बनाएं. आपकी भूमिका व्यवस्थापक में बदल जाती है.","id":"Jadikan anggota lain yang diterima sebagai pemilik. Peran Anda berubah menjadi admin.","pt-BR":"Faça de outro membro aceito o proprietário. Sua função muda para administrador.","ru":"Сделайте другого принятого участника владельцем. Ваша роль изменится на администратора.","ur":"دوسرے قبول شدہ ممبر کو مالک بنائیں۔ آپ کا کردار منتظم میں بدل جاتا ہے۔","zh-CN":"让另一个接受的成员成为所有者。您的角色更改为管理员。"};

export function settings_danger_transfer_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
