import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ الحفظ…","bn":"সংরক্ষণ করা হচ্ছে...","de":"Sparen…","en":"Saving…","es":"Guardando…","fr":"Sauvegarde…","hi":"सहेजा जा रहा है...","id":"Menyimpan…","pt-BR":"Salvando…","ru":"Сохранение…","ur":"محفوظ ہو رہا ہے…","zh-CN":"正在保存..."};

export function common_saving(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
