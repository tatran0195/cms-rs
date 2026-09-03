import { getLocale } from '../runtime.js';

const translations = {"ar":"حفظ","bn":"সংরক্ষণ করুন","de":"Speichern","en":"Save","es":"Guardar","fr":"Enregistrer","hi":"सहेजें","id":"Simpan","pt-BR":"Salvar","ru":"Сохранить","ur":"محفوظ کریں۔","zh-CN":"保存"};

export function settings_git_save(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
