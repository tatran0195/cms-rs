import { getLocale } from '../runtime.js';

const translations = {"ar":"اعرض إجراء مشكلة للأعطال التي يجب تحويلها إلى عناصر عمل.","bn":"ব্যাকলগ আইটেম হওয়া উচিত এমন সমস্যার জন্য একটি ইস্যু অ্যাকশন প্রকাশ করুন।","de":"Machen Sie eine Problemaktion für Probleme verfügbar, die zu Backlog-Elementen werden sollen.","en":"Expose an issue action for problems that should become backlog items.","es":"Exponer una acción para problemas que deberían convertirse en elementos pendientes.","fr":"Exposez une action de problème pour les problèmes qui devraient devenir des éléments du backlog.","hi":"उन समस्याओं के लिए एक समस्या कार्रवाई को उजागर करें जिन्हें बैकलॉग आइटम बनना चाहिए।","id":"Paparkan tindakan masalah untuk masalah yang seharusnya menjadi item simpanan.","pt-BR":"Exponha uma ação de problema para problemas que devem se tornar itens do backlog.","ru":"Предоставьте действия по устранению проблем, которые должны стать элементами невыполненной работы.","ur":"ایسے مسائل کے لیے ایک ایشو ایکشن کو بے نقاب کریں جو بیک لاگ آئٹمز بن جائیں۔","zh-CN":"针对应成为积压项目的问题公开问题操作。"};

export function settings_addons_issuelinks_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
