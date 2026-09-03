import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ القبول…","bn":"গ্রহণ করা হচ্ছে...","de":"Akzeptieren…","en":"Accepting…","es":"Aceptando…","fr":"Accepter…","hi":"स्वीकार कर रहा हूँ...","id":"Menerima…","pt-BR":"Aceitando…","ru":"Принятие…","ur":"قبول کر رہا ہے…","zh-CN":"接受…"};

export function auth_invite_accepting(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
