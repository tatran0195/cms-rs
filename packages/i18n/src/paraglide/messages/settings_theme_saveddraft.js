import { getLocale } from '../runtime.js';

const translations = {"ar":"حُفظت سمة المسودة. انشر عندما تصبح جاهزًا لإرسالها إلى القرّاء.","bn":"খসড়া থিম সংরক্ষিত. যখন আপনি পাঠকদের এটি গ্রহণ করার জন্য প্রস্তুত হন তখন প্রকাশ করুন৷","de":"Designentwurf gespeichert. Veröffentlichen Sie, wenn Sie bereit sind, dass die Leser es erhalten.","en":"Draft theme saved. Publish when you are ready for readers to receive it.","es":"Borrador del tema guardado. Publíquelo cuando esté listo para que los lectores lo reciban.","fr":"Brouillon de thème enregistré. Publiez lorsque vous êtes prêt à ce que les lecteurs le reçoivent.","hi":"ड्राफ्ट थीम सहेजी गई. तब प्रकाशित करें जब आप पाठकों द्वारा इसे प्राप्त करने के लिए तैयार हों।","id":"Draf tema disimpan. Publikasikan ketika Anda siap untuk diterima oleh pembaca.","pt-BR":"Rascunho do tema salvo. Publique quando estiver pronto para que os leitores o recebam.","ru":"Черновик темы сохранен. Опубликуйте, когда будете готовы, чтобы читатели его получили.","ur":"ڈرافٹ تھیم محفوظ ہو گئی۔ اس وقت شائع کریں جب آپ قارئین کے لیے اسے حاصل کرنے کے لیے تیار ہوں۔","zh-CN":"草稿主题已保存。当您准备好让读者接收时发布。"};

export function settings_theme_saveddraft(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
