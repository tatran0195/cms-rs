import { getLocale } from '../runtime.js';

const translations = {"ar":"متابعة الكتابة","bn":"লেখা চালিয়ে যান","de":"Schreiben Sie weiter","en":"Continue writing","es":"continuar escribiendo","fr":"Continuer à écrire","hi":"लिखना जारी रखें","id":"Lanjutkan menulis","pt-BR":"Continuar escrevendo","ru":"Продолжить писать","ur":"لکھنا جاری رکھیں","zh-CN":"继续写"};

export function editor_ai_continue(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
