import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر حفظ الإعدادات","bn":"সেটিংস সংরক্ষণ করা যায়নি৷","de":"Die Einstellungen konnten nicht gespeichert werden","en":"Could not save settings","es":"No se pudo guardar la configuración","fr":"Impossible d'enregistrer les paramètres","hi":"सेटिंग्स सहेजी नहीं जा सकीं","id":"Tidak dapat menyimpan setelan","pt-BR":"Não foi possível salvar as configurações","ru":"Не удалось сохранить настройки","ur":"ترتیبات کو محفوظ نہیں کیا جا سکا","zh-CN":"无法保存设置"};

export function editor_pagesettings_saveerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
