import { getLocale } from '../runtime.js';

const translations = {"ar":"يجمع الصفحات المتجاورة في التنقّل من دون تغيير روابطها.","bn":"তাদের ইউআরএল পরিবর্তন না করে নেভিগেশনে ভাইবোন পৃষ্ঠাগুলিকে গ্রুপ করে।","de":"Gruppiert gleichgeordnete Seiten in der Navigation, ohne deren URLs zu ändern.","en":"Groups sibling pages in navigation without changing their URLs.","es":"Agrupa páginas hermanas en la navegación sin cambiar sus URL.","fr":"Regroupe les pages sœurs dans la navigation sans modifier leurs URL.","hi":"नेविगेशन में सहोदर पृष्ठों का URL बदले बिना उन्हें समूहित करें।","id":"Mengelompokkan halaman saudara dalam navigasi tanpa mengubah URL-nya.","pt-BR":"Agrupa páginas irmãs na navegação sem alterar seus URLs.","ru":"Группирует однородные страницы в навигации без изменения их URL-адресов.","ur":"اپنے یو آر ایل کو تبدیل کیے بغیر نیویگیشن میں بہن بھائی صفحات کو گروپ کرتے ہیں۔","zh-CN":"对导航中的同级页面进行分组，而不更改其 URL。"};

export function editor_pagesettings_categoryhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
