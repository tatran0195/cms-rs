import { getLocale } from '../runtime.js';

const translations = {"ar":"تم حفظ إعدادات اللغة","bn":"ভাষা সেটিংস সংরক্ষিত","de":"Spracheinstellungen gespeichert","en":"Language settings saved","es":"Configuración de idioma guardada","fr":"Paramètres de langue enregistrés","hi":"भाषा सेटिंग सहेजी गईं","id":"Pengaturan bahasa disimpan","pt-BR":"Configurações de idioma salvas","ru":"Языковые настройки сохранены.","ur":"زبان کی ترتیبات محفوظ ہو گئیں۔","zh-CN":"语言设置已保存"};

export function editor_langsettings_saved(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
