import { getLocale } from '../runtime.js';

const translations = {"ar":"اربط خطاف ويب خاصًا بالمزوّد لهذا الموقع.","bn":"এই সাইটের জন্য একটি প্রদানকারী-নির্দিষ্ট ওয়েবহুক সংযুক্ত করুন ।","de":"Verbinden Sie einen anbieterspezifischen Webhook für diese Website.","en":"Connect a provider-specific webhook for this site.","es":"Conecte un webhook específico del proveedor para este sitio.","fr":"Connectez un webhook spécifique au fournisseur pour ce site.","hi":"इस साइट के लिए एक प्रदाता-विशिष्ट वेबहुक कनेक्ट करें।","id":"Hubungkan webhook khusus penyedia untuk situs ini.","pt-BR":"Conecte um webhook específico do provedor para este site.","ru":"Подключите вебхук конкретного провайдера для этого сайта.","ur":"اس سائٹ کے لیے فراہم کنندہ کے لیے مخصوص ویب ہک منسلک کریں ۔","zh-CN":"为此站点连接提供商专用的 Webhook。"};

export function settings_integrations_webhookdescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
