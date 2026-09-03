import { getLocale } from '../runtime.js';

const translations = {"ar":"حدّد النص، ثم اختر تعليق.","bn":"পাঠ্য হাইলাইট করুন, তারপর মন্তব্য নির্বাচন করুন।","de":"Markieren Sie den Text und wählen Sie dann „Kommentar“.","en":"Highlight text, then choose Comment.","es":"Resalte el texto y luego elija Comentar.","fr":"Mettez le texte en surbrillance, puis choisissez Commentaire.","hi":"टेक्स्ट को हाइलाइट करें, फिर टिप्पणी चुनें।","id":"Sorot teks, lalu pilih Komentar.","pt-BR":"Destaque o texto e escolha Comentário.","ru":"Выделите текст, затем выберите «Комментарий».","ur":"متن کو نمایاں کریں، پھر تبصرہ کا انتخاب کریں۔","zh-CN":"突出显示文本，然后选择评论。"};

export function editor_comments_modehint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
