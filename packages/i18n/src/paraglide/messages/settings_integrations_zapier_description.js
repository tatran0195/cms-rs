import { getLocale } from '../runtime.js';

const translations = {"ar":"أتمت سير العمل مع آلاف التطبيقات.","bn":"হাজার হাজার অ্যাপের সাথে কর্মপ্রবাহ স্বয়ংক্রিয় করুন ।","de":"Automatisieren Sie Workflows mit Tausenden von Apps.","en":"Automate workflows with thousands of apps.","es":"Automatiza los flujos de trabajo con miles de aplicaciones.","fr":"Automatiser les workflows avec des milliers d'applications.","hi":"हजारों एप्लिकेशन के साथ स्वचालित वर्कफ़्लोज़।","id":"Otomatis mengalir dengan ribuan aplikasi.","pt-BR":"Automatize fluxos de trabalho com milhares de aplicativos.","ru":"Автоматизация рабочих процессов с помощью тысяч приложений.","ur":"ہزاروں ایپس کے ساتھ ورک فلوز کو خودکار بنائیں ۔","zh-CN":"自动化工作流程与数千应用程序."};

export function settings_integrations_zapier_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
