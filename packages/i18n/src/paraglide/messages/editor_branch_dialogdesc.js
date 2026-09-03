import { getLocale } from '../runtime.js';

const translations = {"ar":"يبدأ من الإصدار الحالي ({name}). يشمل النشر كل الإصدارات ليتمكن القراء من التبديل بينها.","bn":"বর্তমান সংস্করণ ({name}) থেকে শুরু হয়। প্রকাশনা প্রতিটি সংস্করণ অন্তর্ভুক্ত করে যাতে পাঠকরা তাদের মধ্যে স্যুইচ করতে পারে৷","de":"Beginnt mit der aktuellen Version ({name}). Publish umfasst alle Versionen, sodass Leser zwischen ihnen wechseln können.","en":"Starts from the current version ({name}). Publish includes every version so readers can switch between them.","es":"Comienza desde la versión actual ({name}). Publicar incluye todas las versiones para que los lectores puedan cambiar entre ellas.","fr":"Commence à partir de la version actuelle ({name}). Publier inclut chaque version afin que les lecteurs puissent basculer entre elles.","hi":"वर्तमान संस्करण ({name}) से प्रारंभ होता है। प्रकाशन में प्रत्येक संस्करण शामिल है ताकि पाठक उनके बीच स्विच कर सकें।","id":"Dimulai dari versi saat ini ({name}). Publikasikan mencakup setiap versi sehingga pembaca dapat beralih di antara versi tersebut.","pt-BR":"Começa na versão atual ({name}). Publish inclui todas as versões para que os leitores possam alternar entre elas.","ru":"Начинается с текущей версии ({name}). Публикация включает в себя все версии, поэтому читатели могут переключаться между ними.","ur":"موجودہ ورژن ({name}) سے شروع ہوتا ہے۔ اشاعت میں ہر ورژن شامل ہوتا ہے تاکہ قارئین ان کے درمیان سوئچ کر سکیں۔","zh-CN":"从当前版本 ({name}) 开始。发布包括每个版本，以便读者可以在它们之间切换。"};

export function editor_branch_dialogdesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
