import { getLocale } from '../runtime.js';

const translations = {"ar":"تُنظّم المجموعات الصفحات المرتبطة في التنقّل. أضف صفحات إلى هذه المجموعة أو عدّل عنوانها ومعرّفها في الإعدادات.","bn":"গোষ্ঠীগুলি নেভিগেশন সম্পর্কিত পৃষ্ঠাগুলি সংগঠিত করে৷ এই গোষ্ঠীতে পৃষ্ঠাগুলি যুক্ত করুন বা এর শিরোনাম সম্পাদনা করুন এবং সেটিংসে স্লগ করুন৷","de":"Gruppen organisieren verwandte Seiten in der Navigation. Fügen Sie dieser Gruppe Seiten hinzu oder bearbeiten Sie deren Titel und Slug-in-Einstellungen.","en":"Groups organize related pages in the navigation. Add pages to this group or edit its title and slug in settings.","es":"Los grupos organizan páginas relacionadas en la navegación. Agregue páginas a este grupo o edite su título y agregue la configuración.","fr":"Les groupes organisent les pages associées dans la navigation. Ajoutez des pages à ce groupe ou modifiez son titre et ajoutez les paramètres.","hi":"समूह नेविगेशन में संबंधित पृष्ठों को व्यवस्थित करते हैं। इस समूह में पेज जोड़ें या इसका शीर्षक संपादित करें और सेटिंग्स में स्लग करें।","id":"Grup mengatur halaman terkait dalam navigasi. Tambahkan halaman ke grup ini atau edit judul dan slugnya di pengaturan.","pt-BR":"Os grupos organizam páginas relacionadas na navegação. Adicione páginas a este grupo ou edite seu título e slug nas configurações.","ru":"Группы организуют связанные страницы в навигации. Добавьте страницы в эту группу или отредактируйте ее заголовок и ярлык в настройках.","ur":"گروپ نیویگیشن میں متعلقہ صفحات کو منظم کرتے ہیں۔ اس گروپ میں صفحات شامل کریں یا اس کے عنوان میں ترمیم کریں اور ترتیبات میں سلگ کریں۔","zh-CN":"组在导航中组织相关页面。将页面添加到该组或在设置中编辑其标题和slug。"};

export function editor_groupselectedhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
