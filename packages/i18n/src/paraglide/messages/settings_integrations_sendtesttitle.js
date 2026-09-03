import { getLocale } from '../runtime.js';

const translations = {"ar":"إرسال حدث اختبار ظاهر؟","bn":"একটি দৃশ্যমান পরীক্ষা ইভেন্ট পাঠাতে চান?","de":"Ein sichtbares Testereignis senden?","en":"Send a visible test event?","es":"¿Enviar un evento de prueba visible?","fr":"Envoyer un événement de test visible?","hi":"एक दृश्य परीक्षण घटना भेजें?","id":"Kirim acara tes yang terlihat?","pt-BR":"Enviar um evento de teste visível?","ru":"Отправить видимый тест?","ur":"ایک مرئی ٹیسٹ ایونٹ بھیجیں ؟","zh-CN":"发送可见的测试事件吗 ?"};

export function settings_integrations_sendtesttitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
