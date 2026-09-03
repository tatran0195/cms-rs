import { getLocale } from '../runtime.js';

const translations = {"ar":"حفظ الرابط","bn":"লিঙ্ক সংরক্ষণ করুন","de":"Link speichern","en":"Save link","es":"Guardar enlace","fr":"Enregistrer le lien","hi":"लिंक सहेजें","id":"Simpan tautan","pt-BR":"Salvar link","ru":"Сохранить ссылку","ur":"لنک محفوظ کریں۔","zh-CN":"保存链接"};

export function editor_link_save(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
