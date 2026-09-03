import { getLocale } from '../runtime.js';

const translations = {"ar":"ارفع ملف تصدير Ghost بصيغة JSON — تُحوَّل المنشورات والصفحات المنشورة إلى Markdown.","bn":"একটি ঘোস্ট আপলোড করুন JSON রপ্তানি — প্রকাশিত পোস্ট এবং পৃষ্ঠাগুলিকে Markdown এ রূপান্তরিত করা হয়েছে৷","de":"Laden Sie einen Ghost JSON-Export hoch – veröffentlichte Beiträge und Seiten werden in Markdown konvertiert.","en":"Upload a Ghost JSON export — published posts and pages are converted to Markdown.","es":"Cargue una exportación Ghost JSON: las publicaciones y páginas publicadas se convierten a Markdown.","fr":"Téléchargez une exportation Ghost JSON : les articles et les pages publiés sont convertis en Markdown.","hi":"एक घोस्ट JSON निर्यात अपलोड करें - प्रकाशित पोस्ट और पेज Markdown में परिवर्तित हो जाते हैं।","id":"Unggah ekspor Ghost JSON — postingan dan halaman yang dipublikasikan akan dikonversi ke Markdown.","pt-BR":"Carregue uma exportação Ghost JSON – postagens e páginas publicadas são convertidas em Markdown.","ru":"Загрузите экспорт Ghost JSON — опубликованные сообщения и страницы преобразуются в Markdown.","ur":"ایک گھوسٹ اپ لوڈ کریں JSON برآمد — شائع شدہ پوسٹس اور صفحات کو Markdown میں تبدیل کر دیا جاتا ہے۔","zh-CN":"上传 Ghost JSON 导出 — 发布的帖子和页面将转换为 Markdown。"};

export function settings_import_ghost_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
