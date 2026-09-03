import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر إنشاء الحساب","bn":"অ্যাকাউন্ট তৈরি করা যায়নি","de":"Konto konnte nicht erstellt werden","en":"Could not create account","es":"No se pudo crear la cuenta","fr":"Impossible de créer un compte","hi":"खाता नहीं बनाया जा सका","id":"Tidak dapat membuat akun","pt-BR":"Não foi possível criar a conta","ru":"Не удалось создать учетную запись","ur":"اکاؤنٹ نہیں بنا سکا","zh-CN":"无法创建帐户"};

export function auth_signup_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
