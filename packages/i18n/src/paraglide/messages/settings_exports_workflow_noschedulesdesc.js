import { getLocale } from '../runtime.js';

const translations = {"ar":"أنشئ جدولاً عندما تحتاج إلى تشغيل التصدير تلقائيًا عبر مناطق زمنية.","bn":"সময় অঞ্চল জুড়ে রপ্তানি স্বয়ংক্রিয়ভাবে চালানোর প্রয়োজন হলে একটি তৈরি করুন৷","de":"Erstellen Sie eine, wenn Exporte automatisch über Zeitzonen hinweg ausgeführt werden müssen.","en":"Create one when exports need to run automatically across time zones.","es":"Cree uno cuando las exportaciones deban ejecutarse automáticamente en distintas zonas horarias.","fr":"Créez-en un lorsque les exportations doivent s’exécuter automatiquement sur plusieurs fuseaux horaires.","hi":"जब निर्यात को सभी समय क्षेत्रों में स्वचालित रूप से चलाने की आवश्यकता हो तो एक बनाएं।","id":"Buat satu ketika ekspor harus dijalankan secara otomatis melintasi zona waktu.","pt-BR":"Crie um quando as exportações precisarem ser executadas automaticamente em fusos horários.","ru":"Создайте его, если экспорт должен выполняться автоматически между часовыми поясами.","ur":"جب برآمدات کو ٹائم زونز میں خود بخود چلنے کی ضرورت ہو تو ایک بنائیں۔","zh-CN":"当导出需要跨时区自动运行时创建一个。"};

export function settings_exports_workflow_noschedulesdesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
