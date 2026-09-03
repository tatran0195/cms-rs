import { getLocale } from '../runtime.js';

const translations = {"ar":"لا عمليات بناء بعد — انشر من المحرر لإنشاء واحدة.","bn":"এখনও কোনও বিল্ড নেই — একটি তৈরি করতে সম্পাদক থেকে প্রকাশ করুন৷","de":"Noch keine Builds – veröffentlichen Sie sie über den Editor, um einen zu erstellen.","en":"No builds yet — publish from the editor to create one.","es":"Aún no hay compilaciones: publíquelas desde el editor para crear una.","fr":"Aucune version pour l'instant : publiez depuis l'éditeur pour en créer une.","hi":"अभी तक कोई निर्माण नहीं हुआ है - एक बनाने के लिए संपादक से प्रकाशित करें।","id":"Belum ada build — publikasikan dari editor untuk membuatnya.","pt-BR":"Nenhuma compilação ainda – publique no editor para criar uma.","ru":"Сборок пока нет — опубликуйте их в редакторе, чтобы создать.","ur":"ابھی تک کوئی تعمیر نہیں ہوئی — ایک بنانے کے لیے ایڈیٹر سے شائع کریں۔","zh-CN":"尚未构建 - 从编辑器发布以创建一个。"};

export function settings_git_pipeline_nobuilds(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
