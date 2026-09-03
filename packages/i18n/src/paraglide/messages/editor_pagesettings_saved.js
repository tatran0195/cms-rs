import { getLocale } from '../runtime.js';

const translations = {"ar":"تم حفظ إعدادات الصفحة","bn":"পৃষ্ঠা সেটিংস সংরক্ষিত","de":"Seiteneinstellungen gespeichert","en":"Page settings saved","es":"Configuración de página guardada","fr":"Paramètres de page enregistrés","hi":"पृष्ठ सेटिंग सहेजी गईं","id":"Pengaturan halaman disimpan","pt-BR":"Configurações de página salvas","ru":"Настройки страницы сохранены.","ur":"صفحہ کی ترتیبات محفوظ ہو گئیں۔","zh-CN":"已保存页面设置"};

export function editor_pagesettings_saved(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
