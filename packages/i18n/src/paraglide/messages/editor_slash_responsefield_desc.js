import { getLocale } from '../runtime.js';

const translations = {"ar":"حقل استجابة API (الاسم، النوع).","bn":"একটি API প্রতিক্রিয়া ক্ষেত্র (নাম, প্রকার)।","de":"Ein API-Antwortfeld (Name, Typ).","en":"An API response field (name, type).","es":"Un campo de respuesta API (nombre, tipo).","fr":"Un champ de réponse API (nom, type).","hi":"एक API प्रतिक्रिया फ़ील्ड (नाम, प्रकार)।","id":"Bidang respons API (nama, jenis).","pt-BR":"Um campo de resposta API (nome, tipo).","ru":"Поле ответа API (имя, тип).","ur":"ایک API جوابی فیلڈ (نام، قسم)۔","zh-CN":"API 响应字段（名称、类型）。"};

export function editor_slash_responsefield_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
