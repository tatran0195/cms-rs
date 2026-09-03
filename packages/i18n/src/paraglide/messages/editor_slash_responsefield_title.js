import { getLocale } from '../runtime.js';

const translations = {"ar":"حقل استجابة","bn":"প্রতিক্রিয়া ক্ষেত্র","de":"Antwortfeld","en":"Response field","es":"Campo de respuesta","fr":"Champ de réponse","hi":"प्रतिक्रिया क्षेत्र","id":"Bidang respons","pt-BR":"Campo de resposta","ru":"Поле ответа","ur":"رسپانس فیلڈ","zh-CN":"响应字段"};

export function editor_slash_responsefield_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
