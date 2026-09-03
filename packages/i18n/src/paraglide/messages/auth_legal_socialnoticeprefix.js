import { getLocale } from '../runtime.js';

const translations = {"ar":"بالمتابعة، فإنك توافق على ","bn":"চালিয়ে যাওয়ার মাধ্যমে, আপনি এতে সম্মত হন","de":"Indem Sie fortfahren, stimmen Sie dem zu","en":"By continuing, you agree to the ","es":"Al continuar, aceptas las","fr":"En continuant, vous acceptez les","hi":"जारी रखकर, आप इससे सहमत हैं","id":"Dengan melanjutkan, Anda menyetujui","pt-BR":"Ao continuar, você concorda com os","ru":"Продолжая, вы соглашаетесь с","ur":"جاری رکھ کر، آپ اس سے اتفاق کرتے ہیں۔","zh-CN":"继续即表示您同意"};

export function auth_legal_socialnoticeprefix(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
