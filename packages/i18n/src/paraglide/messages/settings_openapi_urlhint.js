import { getLocale } from '../runtime.js';

const translations = {"ar":"تُجلب مصادر HTTP(S) العامة وملفات ‎$ref النسبية التابعة لها من دون بيانات اعتماد.","bn":"সর্বজনীন HTTP(S) উত্স এবং তাদের আপেক্ষিক $ref ফাইলগুলি শংসাপত্র ছাড়াই আনা হয়৷","de":"Öffentliche HTTP(S)-Quellen und ihre entsprechenden $ref-Dateien werden ohne Anmeldeinformationen abgerufen.","en":"Public HTTP(S) sources and their relative $ref files are fetched without credentials.","es":"Las fuentes HTTP(S) públicas y sus archivos $ref relativos se obtienen sin credenciales.","fr":"Les sources HTTP(S) publiques et leurs fichiers $ref relatifs sont récupérés sans informations d'identification.","hi":"सार्वजनिक HTTP(S) स्रोत और उनकी संबंधित $ref फ़ाइलें बिना क्रेडेंशियल के प्राप्त की जाती हैं।","id":"Sumber HTTP(S) publik dan file $ref relatifnya diambil tanpa kredensial.","pt-BR":"Fontes HTTP(S) públicas e seus arquivos $ref relativos são obtidos sem credenciais.","ru":"Публичные источники HTTP(S) и соответствующие им файлы $ref извлекаются без учетных данных.","ur":"عوامی HTTP(S) ذرائع اور ان کی متعلقہ $ref فائلیں بغیر اسناد کے حاصل کی جاتی ہیں۔","zh-CN":"无需凭据即可获取公共 HTTP(S) 源及其相关 $ref 文件。"};

export function settings_openapi_urlhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
