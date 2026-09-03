import { getLocale } from '../runtime.js';

const translations = {"ar":"أنشئ مفاتيح محددة للاستخدام في السكربتات والتكاملات الخاصة بهذا الموقع.","bn":"এই সাইটটিকে কল করে এমন স্ক্রিপ্ট এবং ইন্টিগ্রেশনের জন্য স্কোপড কী তৈরি করুন।","de":"Erstellen Sie bereichsbezogene Schlüssel für Skripte und Integrationen, die diese Site aufrufen.","en":"Create scoped keys for scripts and integrations that call this site.","es":"Cree claves de ámbito para scripts e integraciones que llamen a este sitio.","fr":"Créez des clés étendues pour les scripts et les intégrations qui appellent ce site.","hi":"इस साइट को कॉल करने वाली स्क्रिप्ट और एकीकरण के लिए स्कोप्ड कुंजियाँ बनाएँ।","id":"Buat kunci cakupan untuk skrip dan integrasi yang memanggil situs ini.","pt-BR":"Crie chaves com escopo para scripts e integrações que chamam este site.","ru":"Создайте ключи области действия для сценариев и интеграций, которые вызывают этот сайт.","ur":"اسکرپٹس اور انٹیگریشنز کے لیے دائرہ کار کی کلیدیں بنائیں جو اس سائٹ کو کہتے ہیں۔","zh-CN":"为调用此站点的脚本和集成创建作用域键。"};

export function settings_apikeys_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
