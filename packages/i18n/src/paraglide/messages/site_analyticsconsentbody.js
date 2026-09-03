import { getLocale } from '../runtime.js';

const translations = {"ar":"يستخدم هذا الموقع ملفات تعريف ارتباط اختيارية للتحليلات لفهم الزيارات.","bn":"এই সাইটটি ট্রাফিক বোঝার জন্য ঐচ্ছিক বিশ্লেষণ কুকি ব্যবহার করে।","de":"Diese Website verwendet optionale Analysecookies, um den Datenverkehr zu verstehen.","en":"This site uses optional analytics cookies to understand traffic.","es":"Este sitio utiliza cookies analíticas opcionales para comprender el tráfico.","fr":"Ce site utilise des cookies d'analyse facultatifs pour comprendre le trafic.","hi":"यह साइट ट्रैफ़िक को समझने के लिए वैकल्पिक एनालिटिक्स कुकीज़ का उपयोग करती है।","id":"Situs ini menggunakan cookie analitik opsional untuk memahami lalu lintas.","pt-BR":"Este site usa cookies analíticos opcionais para entender o tráfego.","ru":"Этот сайт использует дополнительные аналитические файлы cookie для анализа трафика.","ur":"یہ سائٹ ٹریفک کو سمجھنے کے لیے اختیاری تجزیاتی کوکیز کا استعمال کرتی ہے۔","zh-CN":"该网站使用可选的分析 cookie 来了解流量。"};

export function site_analyticsconsentbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
