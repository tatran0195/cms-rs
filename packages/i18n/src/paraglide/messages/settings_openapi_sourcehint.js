import { getLocale } from '../runtime.js';

const translations = {"ar":"تُحفظ الملفات المرفوعة بصيغة JSON بعد التحقق. يمكن تحديث مصادر URL والمستودع.","bn":"আপলোডগুলি বৈধ JSON হিসাবে সংরক্ষণ করা হয়৷ URL এবং সংগ্রহস্থলের উত্স রিফ্রেশ করা যেতে পারে।","de":"Uploads werden als validiertes JSON gespeichert. URL- und Repository-Quellen können aktualisiert werden.","en":"Uploads are stored as validated JSON. URL and repository sources can be refreshed.","es":"Las cargas se almacenan como JSON validado. Las fuentes de URL y repositorios se pueden actualizar.","fr":"Les téléchargements sont stockés sous la forme JSON validé. Les sources d’URL et de référentiel peuvent être actualisées.","hi":"अपलोड मान्य JSON के रूप में संग्रहीत किए जाते हैं। यूआरएल और रिपॉजिटरी स्रोतों को ताज़ा किया जा सकता है।","id":"Unggahan disimpan sebagai JSON yang divalidasi. Sumber URL dan repositori dapat disegarkan.","pt-BR":"Os uploads são armazenados como JSON validados. As fontes de URL e repositório podem ser atualizadas.","ru":"Загрузки сохраняются как проверенные JSON. Источники URL-адресов и репозиториев можно обновить.","ur":"اپ لوڈز کو توثیق شدہ JSON کے بطور محفوظ کیا جاتا ہے۔ URL اور مخزن کے ذرائع کو تازہ کیا جا سکتا ہے۔","zh-CN":"上传内容存储为经过验证的 JSON。 URL 和存储库源可以刷新。"};

export function settings_openapi_sourcehint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
