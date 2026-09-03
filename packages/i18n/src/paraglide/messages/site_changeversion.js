import { getLocale } from '../runtime.js';

const translations = {"ar":"تغيير إصدار الوثائق","bn":"ডক্স সংস্করণ পরিবর্তন করুন","de":"Dokumentversion ändern","en":"Change docs version","es":"Cambiar versión de documentos","fr":"Changer la version de la documentation","hi":"दस्तावेज़ संस्करण बदलें","id":"Ubah versi dokumen","pt-BR":"Alterar versão dos documentos","ru":"Изменить версию документов","ur":"دستاویزات کا ورژن تبدیل کریں۔","zh-CN":"更改文档版本"};

export function site_changeversion(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
