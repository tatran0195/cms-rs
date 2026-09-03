import { getLocale } from '../runtime.js';

const translations = {"ar":"الأشخاص الذين يمكنهم الوصول إلى هذا الموقع وتحريره. لكل موقع أعضاؤه وأدواره الخاصة.","bn":"যারা এই সাইট অ্যাক্সেস এবং সম্পাদনা করতে পারেন. প্রতিটি সাইটের নিজস্ব সদস্য এবং ভূমিকা আছে।","de":"Personen, die auf diese Website zugreifen und sie bearbeiten können. Jede Site hat ihre eigenen Mitglieder und Rollen.","en":"People who can access and edit this site. Each site has its own members and roles.","es":"Personas que pueden acceder y editar este sitio. Cada sitio tiene sus propios miembros y roles.","fr":"Personnes pouvant accéder et modifier ce site. Chaque site a ses propres membres et rôles.","hi":"जो लोग इस साइट तक पहुंच सकते हैं और इसे संपादित कर सकते हैं। प्रत्येक साइट के अपने सदस्य और भूमिकाएँ होती हैं।","id":"Orang yang dapat mengakses dan mengedit situs ini. Setiap situs memiliki anggota dan perannya masing-masing.","pt-BR":"Pessoas que podem acessar e editar este site. Cada site tem seus próprios membros e funções.","ru":"Люди, которые могут получить доступ и редактировать этот сайт. На каждом сайте есть свои участники и роли.","ur":"وہ لوگ جو اس سائٹ تک رسائی اور ترمیم کرسکتے ہیں۔ ہر سائٹ کے اپنے اراکین اور کردار ہوتے ہیں۔","zh-CN":"可以访问和编辑此网站的人员。每个站点都有自己的成员和角色。"};

export function settings_members_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
