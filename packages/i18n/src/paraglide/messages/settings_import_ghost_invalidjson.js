import { getLocale } from '../runtime.js';

const translations = {"ar":"هذا الملف ليس JSON صالحًا.","bn":"সেই ফাইলটি বৈধ নয় JSON৷","de":"Diese Datei ist ungültig JSON.","en":"That file is not valid JSON.","es":"Ese archivo no es válido JSON.","fr":"Ce fichier n'est pas valide JSON.","hi":"वह फ़ाइल मान्य नहीं है JSON.","id":"File itu tidak valid JSON.","pt-BR":"Esse arquivo não é válido JSON.","ru":"Этот файл недействителен JSON.","ur":"وہ فائل درست نہیں ہے JSON۔","zh-CN":"该文件无效 JSON。"};

export function settings_import_ghost_invalidjson(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
