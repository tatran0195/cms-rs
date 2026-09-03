import { getLocale } from '../runtime.js';

const translations = {"ar":"انضمّ إلى {org} للتعاون على توثيقه.","bn":"এর ডকুমেন্টেশনে সহযোগিতা করতে {org} এ যোগ দিন।","de":"Treten Sie {org} bei, um an der Dokumentation mitzuarbeiten.","en":"Join {org} to collaborate on its documentation.","es":"Únase a {org} para colaborar en su documentación.","fr":"Rejoignez {org} pour collaborer sur sa documentation.","hi":"इसके दस्तावेज़ीकरण पर सहयोग करने के लिए {org} से जुड़ें।","id":"Bergabunglah dengan {org} untuk berkolaborasi dalam dokumentasinya.","pt-BR":"Junte-se a {org} para colaborar em sua documentação.","ru":"Присоединяйтесь к {org} для совместной работы над его документацией.","ur":"اس کی دستاویزات میں تعاون کرنے کے لیے {org} میں شامل ہوں۔","zh-CN":"加入 {org} 来协作编写其文档。"};

export function auth_invite_joinprompt(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
