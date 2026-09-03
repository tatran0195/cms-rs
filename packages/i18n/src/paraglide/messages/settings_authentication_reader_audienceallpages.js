import { getLocale } from '../runtime.js';

const translations = {"ar":"اترك كل الصفحات دون تحديد لمنح الوصول إلى الموقع كاملًا.","bn":"সম্পূর্ণ সাইট মঞ্জুর করতে প্রতিটি পৃষ্ঠা অনির্বাচিত ছেড়ে দিন।","de":"Lassen Sie jede Seite deaktiviert, um die gesamte Site zu gewähren.","en":"Leave every page unselected to grant the entire site.","es":"Deje todas las páginas sin seleccionar para otorgar acceso a todo el sitio.","fr":"Laissez chaque page désélectionnée pour accorder l’intégralité du site.","hi":"संपूर्ण साइट प्रदान करने के लिए प्रत्येक पृष्ठ को अचयनित छोड़ दें।","id":"Biarkan setiap halaman tidak dipilih untuk memberikan seluruh situs.","pt-BR":"Deixe todas as páginas desmarcadas para conceder o site inteiro.","ru":"Оставьте каждую страницу невыбранной, чтобы предоставить доступ ко всему сайту.","ur":"پوری سائٹ کو دینے کے لیے ہر صفحہ کو غیر منتخب چھوڑ دیں۔","zh-CN":"不选择每个页面即可授予整个站点。"};

export function settings_authentication_reader_audienceallpages(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
