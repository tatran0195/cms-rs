import { getLocale } from '../runtime.js';

const translations = {"ar":"تظهر كقسم أساسي في تنقل الموقع المنشور.","bn":"প্রকাশিত নেভিগেশনে প্রথম-শ্রেণীর বিভাগ হিসেবে দেখানো হয়েছে।","de":"Wird in der veröffentlichten Navigation als erstklassiger Abschnitt angezeigt.","en":"Shown as a first-class section in the published navigation.","es":"Se muestra como una sección de primera clase en la navegación publicada.","fr":"Affiché comme une section de première classe dans la navigation publiée.","hi":"प्रकाशित नेविगेशन में प्रथम श्रेणी अनुभाग के रूप में दिखाया गया है।","id":"Ditampilkan sebagai bagian kelas satu dalam navigasi yang dipublikasikan.","pt-BR":"Mostrado como uma seção de primeira classe na navegação publicada.","ru":"Отображается как первоклассный раздел в опубликованной навигации.","ur":"شائع شدہ نیویگیشن میں فرسٹ کلاس سیکشن کے طور پر دکھایا گیا ہے۔","zh-CN":"在已发布的导航中显示为一流部分。"};

export function settings_openapi_namehint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
