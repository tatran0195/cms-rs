import { getLocale } from '../runtime.js';

const translations = {"ar":"إجراء مدمر أو عالي المخاطر.","bn":"একটি ধ্বংসাত্মক বা উচ্চ-ঝুঁকিপূর্ণ কর্ম।","de":"Eine destruktive oder risikoreiche Aktion.","en":"A destructive or high-risk action.","es":"Una acción destructiva o de alto riesgo.","fr":"Une action destructrice ou à haut risque.","hi":"एक विनाशकारी या उच्च जोखिम वाली कार्रवाई।","id":"Tindakan yang merusak atau berisiko tinggi.","pt-BR":"Uma ação destrutiva ou de alto risco.","ru":"Деструктивное или рискованное действие.","ur":"ایک تباہ کن یا زیادہ خطرہ والی کارروائی۔","zh-CN":"破坏性或高风险的行为。"};

export function editor_slash_danger_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
