import { getLocale } from '../runtime.js';

const translations = {"ar":"حدث خطأ غير متوقع.","bn":"একটি অপ্রত্যাশিত ত্রুটি ঘটেছে৷","de":"Es ist ein unerwarteter Fehler aufgetreten.","en":"An unexpected error occurred.","es":"Se produjo un error inesperado.","fr":"Une erreur inattendue s'est produite.","hi":"एक अप्रत्याशित त्रुटि उत्पन्न हुई.","id":"Terjadi kesalahan yang tidak terduga.","pt-BR":"Ocorreu um erro inesperado.","ru":"Произошла непредвиденная ошибка.","ur":"ایک غیر متوقع خرابی پیش آگئی۔","zh-CN":"发生意外错误。"};

export function error_unexpected(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
