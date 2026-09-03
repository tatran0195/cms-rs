import { getLocale } from '../runtime.js';

const translations = {"ar":"سياق مفيد للقارئ.","bn":"পাঠকের জন্য সহায়ক প্রসঙ্গ।","de":"Hilfreicher Kontext für den Leser.","en":"Helpful context for the reader.","es":"Contexto útil para el lector.","fr":"Contexte utile pour le lecteur.","hi":"पाठक के लिए उपयोगी प्रसंग.","id":"Konteks yang bermanfaat bagi pembaca.","pt-BR":"Contexto útil para o leitor.","ru":"Полезный контекст для читателя.","ur":"قاری کے لیے مفید سیاق و سباق۔","zh-CN":"对读者有帮助的上下文。"};

export function editor_slash_info_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
