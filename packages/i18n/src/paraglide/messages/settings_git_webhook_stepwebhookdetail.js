import { getLocale } from '../runtime.js';

const translations = {"ar":"وجّه مستودعك إلى رابط الاستلام هذا ووقّع الإرسالات بالسر.","bn":"এই পেলোড ইউআরএলে আপনার সংগ্রহস্থল নির্দেশ করুন এবং গোপনীয়তার সাথে বিতরণে স্বাক্ষর করুন।","de":"Richten Sie Ihr Repository auf diese Payload-URL und signieren Sie Lieferungen mit dem Geheimnis.","en":"Point your repository at this payload URL and sign deliveries with the secret.","es":"Apunte su repositorio a esta URL de carga útil y firme las entregas con el secreto.","fr":"Pointez votre référentiel vers cette URL de charge utile et signez les livraisons avec le secret.","hi":"इस पेलोड यूआरएल पर अपने भंडार को इंगित करें और रहस्य के साथ डिलीवरी पर हस्ताक्षर करें।","id":"Arahkan repositori Anda ke URL payload ini dan tandatangani pengiriman dengan rahasianya.","pt-BR":"Aponte seu repositório para esta URL de carga útil e assine as entregas com o segredo.","ru":"Укажите в своем репозитории этот URL-адрес полезной нагрузки и подпишите поставки секретом.","ur":"اس پے لوڈ یو آر ایل پر اپنے ذخیرے کی نشاندہی کریں اور راز کے ساتھ ڈیلیوری پر دستخط کریں۔","zh-CN":"将您的存储库指向此有效负载 URL，并使用密钥对交付进行签名。"};

export function settings_git_webhook_stepwebhookdetail(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
