import { getLocale } from '../runtime.js';

const translations = {"ar":"أنشئ نسخة مترجمة جديدة من صفحات هذا الموقع.","bn":"এই সাইটের পৃষ্ঠাগুলির একটি নতুন স্থানীয় সংস্করণ তৈরি করুন৷","de":"Erstellen Sie eine neue lokalisierte Version der Seiten dieser Website.","en":"Create a new localized version of this site's pages.","es":"Cree una nueva versión localizada de las páginas de este sitio.","fr":"Créez une nouvelle version localisée des pages de ce site.","hi":"इस साइट के पृष्ठों का एक नया स्थानीय संस्करण बनाएं।","id":"Buat versi lokal baru dari halaman situs ini.","pt-BR":"Crie uma nova versão localizada das páginas deste site.","ru":"Создайте новую локализованную версию страниц этого сайта.","ur":"اس سائٹ کے صفحات کا ایک نیا مقامی ورژن بنائیں۔","zh-CN":"创建该网站页面的新本地化版本。"};

export function editor_addlanguage_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
