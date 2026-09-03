import { getLocale } from '../runtime.js';

const translations = {"ar":"ادعُ زملاء الفريق للتعاون على التوثيق.","bn":"ডকুমেন্টেশনে সহযোগিতা করার জন্য সতীর্থদের আমন্ত্রণ জানান।","de":"Laden Sie Teamkollegen ein, an der Dokumentation mitzuarbeiten.","en":"Invite teammates to collaborate on documentation.","es":"Invita a tus compañeros de equipo a colaborar en la documentación.","fr":"Invitez vos coéquipiers à collaborer sur la documentation.","hi":"दस्तावेज़ीकरण पर सहयोग करने के लिए टीम के साथियों को आमंत्रित करें।","id":"Undang rekan satu tim untuk berkolaborasi dalam dokumentasi.","pt-BR":"Convide colegas de equipe para colaborar na documentação.","ru":"Пригласите членов команды к совместной работе над документацией.","ur":"ٹیم کے ساتھیوں کو دستاویزات پر تعاون کرنے کے لیے مدعو کریں۔","zh-CN":"邀请团队成员协作处理文档。"};

export function members_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
