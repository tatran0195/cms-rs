import { getLocale } from '../runtime.js';

const translations = {"ar":"أو الصق JWKS عامة (لا تلصق مفتاحًا خاصًا)","bn":"অথবা একটি পাবলিক JWKS পেস্ট করুন (কখনও ব্যক্তিগত কী নয়)","de":"Oder fügen Sie ein öffentliches JWKS ein (niemals einen privaten Schlüssel)","en":"Or paste a public JWKS (never a private key)","es":"O pegue un JWKS público (nunca una clave privada)","fr":"Ou collez un JWKS public (jamais une clé privée)","hi":"या एक सार्वजनिक JWKS चिपकाएँ (कभी भी निजी कुंजी नहीं)","id":"Atau tempelkan JWKS publik (bukan kunci pribadi)","pt-BR":"Ou cole um JWKS público (nunca uma chave privada)","ru":"Или вставьте общедоступный JWKS (никогда не закрытый ключ).","ur":"یا عوامی JWKS چسپاں کریں (کبھی بھی نجی کلید نہیں)","zh-CN":"或者粘贴公共 JWKS（绝不是私钥）"};

export function settings_authentication_reader_jwksplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
