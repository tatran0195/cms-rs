import { getLocale } from '../runtime.js';

const translations = {"ar":"ادعُ زملاءك وحدّد الأدوار.","bn":"সতীর্থদের আমন্ত্রণ জানান এবং ভূমিকা সেট করুন।","de":"Laden Sie Teamkollegen ein und legen Sie Rollen fest.","en":"Invite teammates and set roles.","es":"Invita a compañeros de equipo y establece roles.","fr":"Invitez des coéquipiers et définissez les rôles.","hi":"टीम के साथियों को आमंत्रित करें और भूमिकाएँ निर्धारित करें।","id":"Undang rekan satu tim dan tetapkan peran.","pt-BR":"Convide colegas de equipe e defina funções.","ru":"Пригласите товарищей по команде и определите роли.","ur":"ٹیم کے ساتھیوں کو مدعو کریں اور کردار مقرر کریں۔","zh-CN":"邀请队友并设定角色。"};

export function overview_link_membersdesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
