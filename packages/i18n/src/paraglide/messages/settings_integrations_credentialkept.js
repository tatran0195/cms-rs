import { getLocale } from '../runtime.js';

const translations = {"ar":"اتركه فارغًا للاحتفاظ ببيانات الاعتماد الحالية","bn":"বর্তমান শংসাপত্র বজায় রাখতে ফাঁকা রাখুন","de":"Leer lassen, um die aktuellen Anmeldeinformationen beizubehalten","en":"Leave blank to keep the current credential","es":"Dejar en blanco para mantener la credencial actual","fr":"Laisser en blanc pour conserver le justificatif actuel","hi":"वर्तमान क्रेडेंशियल को रखने के लिए खाली छोड़ दें","id":"Tinggalkan kosong untuk menjaga kredensial saat ini","pt-BR":"Deixar em branco para manter a credencial atual","ru":"Оставьте пустой, чтобы сохранить текущие полномочия","ur":"موجودہ اسناد کو برقرار رکھنے کے لیے خالی چھوڑ دیں","zh-CN":"留空保留当前证书"};

export function settings_integrations_credentialkept(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
