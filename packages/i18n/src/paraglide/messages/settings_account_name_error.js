import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر حفظ اسمك","bn":"আপনার নাম সংরক্ষণ করা যায়নি","de":"Ihr Name konnte nicht gespeichert werden","en":"Could not save your name","es":"No se pudo guardar tu nombre","fr":"Impossible d'enregistrer votre nom","hi":"आपका नाम सहेजा नहीं जा सका","id":"Tidak dapat menyimpan nama Anda","pt-BR":"Não foi possível salvar seu nome","ru":"Не удалось сохранить ваше имя","ur":"آپ کا نام محفوظ نہیں کیا جا سکا","zh-CN":"无法保存您的名字"};

export function settings_account_name_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
