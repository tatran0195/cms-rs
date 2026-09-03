import { getLocale } from '../runtime.js';

const translations = {"ar":"اسمح للقراء بتقييم الصفحات وترك ملاحظات للمحررين.","bn":"পাঠকদের পৃষ্ঠাগুলিকে সহায়ক হিসাবে চিহ্নিত করতে দিন এবং সম্পাদকদের জন্য মন্তব্য করতে দিন৷","de":"Ermöglichen Sie den Lesern, Seiten als hilfreich zu markieren und Kommentare für Redakteure zu hinterlassen.","en":"Let readers mark pages as helpful and leave comments for editors.","es":"Permita que los lectores marquen las páginas como útiles y dejen comentarios para los editores.","fr":"Laissez les lecteurs marquer les pages comme utiles et laissez des commentaires aux éditeurs.","hi":"पाठकों को पृष्ठों को उपयोगी के रूप में चिह्नित करने दें और संपादकों के लिए टिप्पणियाँ छोड़ने दें।","id":"Izinkan pembaca menandai halaman sebagai bermanfaat dan memberikan komentar untuk editor.","pt-BR":"Permita que os leitores marquem as páginas como úteis e deixem comentários para os editores.","ru":"Позвольте читателям отмечать страницы как полезные и оставлять комментарии для редакторов.","ur":"قارئین کو صفحات کو مددگار کے طور پر نشان زد کرنے دیں اور ایڈیٹرز کے لیے تبصرے چھوڑ دیں۔","zh-CN":"让读者将页面标记为有帮助，并为编辑留下评论。"};

export function settings_addons_feedback_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
