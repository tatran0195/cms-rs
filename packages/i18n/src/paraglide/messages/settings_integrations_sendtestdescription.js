import { getLocale } from '../runtime.js';

const translations = {"ar":"يرسل هذا التحقق رسالة أو حدثًا ظاهرًا إلى المزوّد الخارجي.","bn":"এই যাচাইকরণ বাহ্যিক প্রদানকারীকে একটি দৃশ্যমান বার্তা বা ইভেন্ট পাঠায় ।","de":"Diese Verifizierung sendet eine sichtbare Nachricht oder ein Ereignis an den externen Anbieter.","en":"This verification sends a visible message or event to the external provider.","es":"Esta verificación envía un mensaje o evento visible al proveedor externo.","fr":"Cette vérification envoie un message ou un événement visible au fournisseur externe.","hi":"यह सत्यापन बाहरी प्रदाता को एक दृश्य संदेश या घटना भेजता है।","id":"Verifikasi ini mengirimkan pesan atau kejadian yang tampak ke penyedia eksternal.","pt-BR":"Esta verificação envia uma mensagem ou evento visível para o provedor externo.","ru":"Эта проверка отправляет видимое сообщение или событие внешнему поставщику.","ur":"یہ توثیق بیرونی فراہم کنندہ کو ایک مرئی پیغام یا ایونٹ بھیجتی ہے ۔","zh-CN":"此校验向外部提供者发送可见的消息或事件 。"};

export function settings_integrations_sendtestdescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
