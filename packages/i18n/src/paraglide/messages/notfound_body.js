import { getLocale } from '../runtime.js';

const translations = {"ar":"الصفحة التي تبحث عنها غير موجودة أو تم نقلها.","bn":"আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি বিদ্যমান নেই বা সরানো হয়েছে৷","de":"Die gesuchte Seite existiert nicht oder wurde verschoben.","en":"The page you are looking for doesn't exist or has moved.","es":"La página que buscas no existe o se ha movido.","fr":"La page que vous recherchez n'existe pas ou a été déplacée.","hi":"आप जिस पृष्ठ की तलाश कर रहे हैं वह मौजूद नहीं है या स्थानांतरित हो गया है।","id":"Halaman yang dicari tidak ada atau sudah berpindah.","pt-BR":"A página que você procura não existe ou foi movida.","ru":"Страница, которую вы ищете, не существует или переехала.","ur":"آپ جس صفحہ کی تلاش کر رہے ہیں وہ موجود نہیں ہے یا منتقل ہو گیا ہے۔","zh-CN":"您要查找的页面不存在或已移动。"};

export function notfound_body(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
