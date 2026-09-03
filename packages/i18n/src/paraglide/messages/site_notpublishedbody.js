import { getLocale } from '../runtime.js';

const translations = {"ar":"لم يتم نشر موقع الوثائق هذا. انشره من المحرر لرؤيته مباشرةً.","bn":"এই ডকুমেন্টেশন সাইট প্রকাশ করা হয়নি. এটি লাইভ দেখতে সম্পাদক থেকে এটি প্রকাশ করুন৷","de":"Diese Dokumentationsseite wurde nicht veröffentlicht. Veröffentlichen Sie es im Editor, um es live zu sehen.","en":"This documentation site hasn't been published. Publish it from the editor to see it live.","es":"Este sitio de documentación no ha sido publicado. Publícalo desde el editor para verlo en vivo.","fr":"Ce site de documentation n'a pas été publié. Publiez-le depuis l'éditeur pour le voir en direct.","hi":"यह दस्तावेज़ीकरण साइट प्रकाशित नहीं की गई है. इसे लाइव देखने के लिए इसे संपादक से प्रकाशित करें।","id":"Situs dokumentasi ini belum dipublikasikan. Publikasikan dari editor untuk melihatnya langsung.","pt-BR":"Este site de documentação não foi publicado. Publique-o no editor para vê-lo ao vivo.","ru":"Этот сайт документации не был опубликован. Опубликуйте его из редактора, чтобы увидеть вживую.","ur":"اس دستاویزی سائٹ کو شائع نہیں کیا گیا ہے۔ اسے لائیو دیکھنے کے لیے ایڈیٹر سے شائع کریں۔","zh-CN":"该文档站点尚未发布。从编辑器中发布以实时查看。"};

export function site_notpublishedbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
