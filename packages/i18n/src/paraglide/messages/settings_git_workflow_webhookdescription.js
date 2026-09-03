import { getLocale } from '../runtime.js';

const translations = {"ar":"اشترك في أحداث push وpull_request. يتم التحقّق من توقيع كل تسليم وإزالة التكرار.","bn":"পুশ এবং পুল_রিকোয়েস্ট ইভেন্টগুলিতে সদস্যতা নিন। ডেলিভারি স্বাক্ষর-যাচাই করা হয় এবং অনুলিপি করা হয়।","de":"Abonnieren Sie Push- und Pull_request-Ereignisse. Lieferungen werden unterschriftsgeprüft und dedupliziert.","en":"Subscribe to push and pull_request events. Deliveries are signature-verified and deduplicated.","es":"Suscríbase a eventos push y pull_request. Las entregas se verifican con firma y se deduplican.","fr":"Abonnez-vous aux événements push et pull_request. Les livraisons sont vérifiées avec signature et dédupliquées.","hi":"पुश और पुल_रिक्वेस्ट इवेंट की सदस्यता लें। डिलीवरी हस्ताक्षर-सत्यापित और डुप्लिकेट की गई हैं।","id":"Berlangganan acara push dan pull_request. Pengiriman diverifikasi tanda tangan dan dihapus duplikatnya.","pt-BR":"Assine eventos push e pull_request. As entregas são verificadas por assinatura e desduplicadas.","ru":"Подпишитесь на события push и pull_request. Поставки проверяются по подписи и дедуплицируются.","ur":"push and pull_request ایونٹس کو سبسکرائب کریں۔ ڈیلیوری دستخط سے تصدیق شدہ اور نقل شدہ ہیں۔","zh-CN":"订阅push和pull_request事件。交付经过签名验证和重复数据删除。"};

export function settings_git_workflow_webhookdescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
