import { getLocale } from '../runtime.js';

const translations = {"ar":"نتيجة ناجحة أو تم التحقق منها.","bn":"একটি সফল বা যাচাইকৃত ফলাফল।","de":"Ein erfolgreiches oder verifiziertes Ergebnis.","en":"A successful or verified outcome.","es":"Un resultado exitoso o verificado.","fr":"Un résultat réussi ou vérifié.","hi":"एक सफल या सत्यापित परिणाम।","id":"Hasil yang sukses atau terverifikasi.","pt-BR":"Um resultado bem-sucedido ou verificado.","ru":"Успешный или проверенный результат.","ur":"ایک کامیاب یا تصدیق شدہ نتیجہ۔","zh-CN":"成功的或经过验证的结果。"};

export function editor_slash_check_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
