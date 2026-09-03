import { getLocale } from '../runtime.js';

const translations = {"ar":"إجراء مضمّن يربط بصفحة أخرى.","bn":"অন্য পৃষ্ঠার সাথে লিঙ্ক করা একটি ইনলাইন অ্যাকশন।","de":"Eine Inline-Aktion, die auf eine andere Seite verweist.","en":"An inline action linking to another page.","es":"Una acción en línea que vincula a otra página.","fr":"Une action en ligne renvoyant vers une autre page.","hi":"किसी अन्य पृष्ठ से लिंक करने वाली एक इनलाइन क्रिया।","id":"Tindakan sebaris yang menghubungkan ke halaman lain.","pt-BR":"Uma ação inline com link para outra página.","ru":"Встроенное действие, ссылающееся на другую страницу.","ur":"ایک ان لائن ایکشن جو دوسرے صفحہ سے منسلک ہوتا ہے۔","zh-CN":"链接到另一个页面的内联操作。"};

export function editor_slash_button_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
