import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر العثور على هذه الدعوة. قد يكون الرابط غير صالح أو مُستخدمًا من قبل.","bn":"এই আমন্ত্রণ খুঁজে পাওয়া যায়নি. লিঙ্কটি অবৈধ বা ইতিমধ্যে ব্যবহৃত হতে পারে।","de":"Diese Einladung konnte nicht gefunden werden. Der Link ist möglicherweise ungültig oder wurde bereits verwendet.","en":"This invitation could not be found. The link may be invalid or already used.","es":"No se pudo encontrar esta invitación. Es posible que el enlace no sea válido o que ya esté utilizado.","fr":"Cette invitation est introuvable. Le lien est peut-être invalide ou déjà utilisé.","hi":"यह आमंत्रण नहीं मिल सका. लिंक अमान्य हो सकता है या पहले से ही उपयोग किया जा सकता है.","id":"Undangan ini tidak dapat ditemukan. Tautan mungkin tidak valid atau sudah digunakan.","pt-BR":"Este convite não foi encontrado. O link pode ser inválido ou já utilizado.","ru":"Это приглашение не найдено. Ссылка может быть недействительной или уже использованной.","ur":"یہ دعوت نامہ نہیں مل سکا۔ لنک غلط یا پہلے سے استعمال ہو سکتا ہے۔","zh-CN":"找不到此邀请。该链接可能无效或已被使用。"};

export function auth_invite_notfound(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
