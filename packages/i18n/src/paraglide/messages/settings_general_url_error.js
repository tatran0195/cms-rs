import { getLocale } from '../runtime.js';

const translations = {"ar":"استخدم من 1 إلى 63 حرفًا لاتينيًا صغيرًا أو رقمًا أو شرطة.","bn":"1-63 ছোট হাতের অক্ষর, সংখ্যা এবং হাইফেন ব্যবহার করুন।","de":"Verwenden Sie 1-63 Kleinbuchstaben, Zahlen und Bindestriche.","en":"Use 1-63 lowercase letters, numbers, and hyphens.","es":"Utilice entre 1 y 63 letras minúsculas, números y guiones.","fr":"Utilisez 1 à 63 lettres minuscules, chiffres et traits d’union.","hi":"1-63 छोटे अक्षरों, संख्याओं और हाइफ़न का उपयोग करें।","id":"Gunakan 1-63 huruf kecil, angka, dan tanda hubung.","pt-BR":"Use de 1 a 63 letras minúsculas, números e hifens.","ru":"Используйте от 1 до 63 строчных букв, цифр и дефисов.","ur":"1-63 چھوٹے حروف، اعداد اور ہائفن استعمال کریں۔","zh-CN":"使用 1-63 个小写字母、数字和连字符。"};

export function settings_general_url_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
