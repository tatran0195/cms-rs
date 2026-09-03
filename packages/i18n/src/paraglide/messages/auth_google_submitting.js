import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ فتح Google…","bn":"খোলা হচ্ছে Google…","de":"Google wird geöffnet…","en":"Opening Google…","es":"Abriendo Google…","fr":"Ouverture de Google…","hi":"खुल रहा है Google…","id":"Pembukaan Google…","pt-BR":"Abrindo Google…","ru":"Открытие Google…","ur":"کھل رہا ہے Google…","zh-CN":"打开 Google..."};

export function auth_google_submitting(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
