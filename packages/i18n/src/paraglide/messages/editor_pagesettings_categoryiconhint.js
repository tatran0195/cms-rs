import { getLocale } from '../runtime.js';

const translations = {"ar":"اسم أيقونة اختياري مشترك لهذا التصنيف.","bn":"ঐচ্ছিক আইকন নাম এই সাইডবার বিভাগ দ্বারা ভাগ করা হয়েছে.","de":"Optionaler Symbolname, der von dieser Seitenleistenkategorie geteilt wird.","en":"Optional icon name shared by this sidebar category.","es":"Nombre del icono opcional compartido por esta categoría de la barra lateral.","fr":"Nom d’icône facultatif partagé par cette catégorie de la barre latérale.","hi":"इस साइडबार श्रेणी द्वारा साझा किया गया वैकल्पिक आइकन नाम।","id":"Nama ikon opsional yang dibagikan oleh kategori sidebar ini.","pt-BR":"Nome de ícone opcional compartilhado por esta categoria da barra lateral.","ru":"Необязательное имя значка, общее для этой категории боковой панели.","ur":"اختیاری آئیکن کا نام اس سائڈبار زمرے کے ذریعے اشتراک کیا گیا ہے۔","zh-CN":"此侧边栏类别共享的可选图标名称。"};

export function editor_pagesettings_categoryiconhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
