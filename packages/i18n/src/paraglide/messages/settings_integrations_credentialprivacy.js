import { getLocale } from '../runtime.js';

const translations = {"ar":"يُشفّر رابط خطاف الويب ويبقى للكتابة فقط بعد الحفظ.","bn":"ওয়েবহুক URL এনক্রিপ্ট করা হয় এবং সংরক্ষণের পর এটি কেবল লেখার জন্যই থাকে।","de":"Die Webhook-URL ist verschlüsselt und bleibt nach dem Speichern schreibgeschützt.","en":"The webhook URL is encrypted and remains write-only after saving.","es":"La URL del webhook está cifrada y permanece de solo escritura después de guardarla.","fr":"L’URL du webhook est chiffrée et reste inaccessible en lecture après l’enregistrement.","hi":"वेबहुक URL एन्क्रिप्ट किया जाता है और सहेजने के बाद केवल लिखने योग्य रहता है।","id":"URL webhook dienkripsi dan tetap bersifat hanya-tulis setelah disimpan.","pt-BR":"A URL do webhook é criptografada e permanece disponível apenas para gravação após ser salva.","ru":"URL вебхука зашифрован и после сохранения остается доступным только для записи.","ur":"ویب ہک URL کو خفیہ کیا جاتا ہے اور محفوظ کرنے کے بعد یہ صرف تحریر کے لیے دستیاب رہتا ہے۔","zh-CN":"Webhook URL 已加密，保存后仍仅可写入。"};

export function settings_integrations_credentialprivacy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
