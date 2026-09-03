import { getLocale } from '../runtime.js';

const translations = {"ar":"حفظ وضع الوصول","bn":"অ্যাক্সেস মোড সংরক্ষণ করুন","de":"Zugriffsmodus speichern","en":"Save access mode","es":"Guardar modo de acceso","fr":"Enregistrer le mode d'accès","hi":"एक्सेस मोड सहेजें","id":"Simpan mode akses","pt-BR":"Salvar modo de acesso","ru":"Сохранить режим доступа","ur":"رسائی موڈ کو محفوظ کریں۔","zh-CN":"保存访问模式"};

export function settings_authentication_reader_savemode(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
