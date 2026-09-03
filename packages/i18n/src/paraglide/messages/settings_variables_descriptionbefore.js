import { getLocale } from '../runtime.js';

const translations = {"ar":"قيم قابلة لإعادة الاستخدام يمكنك الإشارة إليها في أي صفحة باستخدام","bn":"পুনঃব্যবহারযোগ্য মান আপনি যেকোন পৃষ্ঠায় উল্লেখ করতে পারেন","de":"Wiederverwendbare Werte, auf die Sie auf jeder Seite verweisen können","en":"Reusable values you can reference in any page with","es":"Valores reutilizables a los que puede hacer referencia en cualquier página","fr":"Valeurs réutilisables que vous pouvez référencer dans n'importe quelle page avec","hi":"पुन: प्रयोज्य मानों को आप किसी भी पृष्ठ में संदर्भित कर सकते हैं","id":"Nilai yang dapat digunakan kembali yang dapat Anda rujuk di halaman mana pun","pt-BR":"Valores reutilizáveis que você pode referenciar em qualquer página com","ru":"Многоразовые значения, на которые вы можете ссылаться на любой странице с помощью","ur":"دوبارہ قابل استعمال اقدار جن کا آپ کسی بھی صفحہ میں حوالہ دے سکتے ہیں۔","zh-CN":"您可以在任何页面中引用可重用的值"};

export function settings_variables_descriptionbefore(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
