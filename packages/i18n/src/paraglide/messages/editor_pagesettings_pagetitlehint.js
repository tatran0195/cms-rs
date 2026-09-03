import { getLocale } from '../runtime.js';

const translations = {"ar":"يظهر في المحرّر والتنقّل ورأس الصفحة المنشورة.","bn":"সম্পাদক, নেভিগেশন এবং প্রকাশিত পৃষ্ঠা শিরোনামে দেখানো হয়েছে।","de":"Wird im Editor, in der Navigation und im Kopf der veröffentlichten Seite angezeigt.","en":"Shown in the editor, navigation, and published page header.","es":"Se muestra en el editor, la navegación y el encabezado de la página publicada.","fr":"Affiché dans l’éditeur, la navigation et l’en-tête de la page publiée.","hi":"संपादक, नेविगेशन और प्रकाशित पृष्ठ शीर्षलेख में दिखाया गया है।","id":"Ditampilkan di editor, navigasi, dan header halaman yang diterbitkan.","pt-BR":"Mostrado no editor, na navegação e no cabeçalho da página publicada.","ru":"Отображается в редакторе, навигации и заголовке опубликованной страницы.","ur":"ایڈیٹر، نیویگیشن، اور شائع شدہ صفحہ ہیڈر میں دکھایا گیا ہے۔","zh-CN":"显示在编辑器、导航和已发布的页面标题中。"};

export function editor_pagesettings_pagetitlehint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
