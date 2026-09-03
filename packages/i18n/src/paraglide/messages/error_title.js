import { getLocale } from '../runtime.js';

const translations = {"ar":"حدث خطأ ما","bn":"কিছু ভুল হয়েছে","de":"Etwas ist schief gelaufen","en":"Something went wrong","es":"algo salió mal","fr":"Quelque chose s'est mal passé","hi":"कुछ ग़लत हो गया","id":"Ada yang tidak beres","pt-BR":"Algo deu errado","ru":"Что-то пошло не так","ur":"کچھ غلط ہو گیا۔","zh-CN":"出了点问题"};

export function error_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
