import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر حفظ إعدادات Git","bn":"গিট সেটিংস সংরক্ষণ করা যায়নি","de":"Git-Einstellungen konnten nicht gespeichert werden","en":"Could not save Git settings","es":"No se pudo guardar la configuración de Git","fr":"Impossible d'enregistrer les paramètres Git","hi":"Git सेटिंग्स सहेजी नहीं जा सकीं","id":"Tidak dapat menyimpan pengaturan Git","pt-BR":"Não foi possível salvar as configurações do Git","ru":"Не удалось сохранить настройки Git.","ur":"Git کی ترتیبات کو محفوظ نہیں کیا جا سکا","zh-CN":"无法保存 Git 设置"};

export function settings_git_saveerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
